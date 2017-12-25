import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    GoogleApiWrapper, InfoWindow, Map, Marker
} from 'google-maps-react';
import { API_KEY } from "../utils/constants";

/**
 *
 */
export class Maps extends Component {
    state = {
        showingInfoWindow: false,
        selectedPlace: {},
        position: {
            lat: 50.5,
            lng: 30.5
        },
        type: this.props.type,
        newMarker: {
            changed: false,
            position: {
                lat: this.props.markers.latitude,
                lng: this.props.markers.longitude
            },
        },
    };

    onMapClick = (mapProps, map, clickEvent) => {
        if (this.state.type && this.state.type !== 'show') {
            this.props.getPositionOnMap(clickEvent.latLng.toJSON());
            this.setState({
                newMarker: {
                    changed: true,
                    position: clickEvent.latLng.toJSON()
                }
            })
        }
    }

    fetchPlaces = ({ google }, map) => {
    }

    markerOnClick = ({ id, position }) => {
        const markers = this.props.markers
            .find(markers => markers.id === id);
        this.setState({
            showingInfoWindow: true,
            selectedPlace: {
                position: position,
                ...markers,
            }
        })
    };

    infoWindowClose = () => {
        this.setState({
            showingInfoWindow: false,
        })
    };

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => this.setState({
                position: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                }
            }));
        }
        if (this.props.initialCenter) {
            const { initialCenter: { lat, lng } } = this.props;
            this.setState({
                position: {
                    lat: lat,
                    lng: lng
                }
            })
        }
    }

    markersOnMap = () => {
        const markers = this.props.markers;
        switch (this.props.type) {
            case 'add':
                return (
                    <Marker
                        onClick={this.markerOnClick}
                        key={"marker_" + markers.id}
                        title={markers.type}
                        name={markers.type}
                        id={markers.id}
                        position={this.state.newMarker.position}
                    />
                )
            case 'edit':
                return (
                    <Marker
                        onClick={this.markerOnClick}
                        key={"marker_" + markers.id}
                        title={markers.type}
                        name={markers.type}
                        id={markers.id}
                        position={this.state.newMarker.changed ? this.state.newMarker.position : { lat: markers.latitude, lng: markers.longitude }}
                    />
                )
            default:
                return markers.map((car) => (
                    <Marker
                        onClick={this.markerOnClick}
                        key={"marker_" + car.id}
                        title={car.type}
                        name={car.type}
                        id={car.id}
                        position={{ lat: car.latitude, lng: car.longitude }}
                    />
                ))
        }
    }

    render() {

        return (
            <Map
                onReady={this.fetchPlaces}
                onClick={this.onMapClick}
                google={this.props.google}
                zoom={12}
                className={'map'}
                initialCenter={this.state.position}
                style={{
                    position: 'relative',
                    width: '60%',
                    height: '80%',
                }}
            >
                {this.markersOnMap()}
                <InfoWindow
                    visible={this.state.showingInfoWindow}
                    position={this.state.selectedPlace.position}
                    onClose={this.infoWindowClose}
                >
                    <div>
                        <h1>{`${this.state.selectedPlace.mark} - ${this.state.selectedPlace.type}`}</h1>
                        <p>{this.state.selectedPlace.model}</p>
                        <img
                            src={this.state.selectedPlace.image}
                            width={150}
                            alt={''}
                        />
                        <a className="btn btn-sm btn-info" href={`/auto/${this.state.selectedPlace.id}/view`}>
                            <i className="fa fa-fw fa-eye"></i> view
                        </a>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

Maps.propTypes = {
    markers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    initialCenter: PropTypes.objectOf({
        lat: PropTypes.string,
        lng: PropTypes.string
    }),
    type: PropTypes.string,
    getPositionOnMap: PropTypes.func
};

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(Maps)