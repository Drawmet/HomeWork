import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {API_KEY} from "../utils/constants";

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
        }
    };

    markerOnClick = ({id, position}) => {
        console.log(id);
        const car = this.props.markers
            .find(item => item.id === id);
        this.setState({
            showingInfoWindow: true,
            selectedPlace: {
                position: position,
                ...car,
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
    }

    render() {

        const markersOnMap = this.props.markers.map((item) => (
            <Marker
                key={"marker_" + item.id}
                title={item.type}
                name={item.type}
                id={item.id}
                position={{lat: item.latitude, lng: item.longitude}}
                onClick={this.markerOnClick}
            />
        ));

        return (
            <Map
                google={this.props.google}
                zoom={14}
                className={'map'}
                initialCenter={this.state.position}
                style={{
                    position: 'relative',
                    width: '60%',
                    height: '80%',
                }}
            >
                {markersOnMap}
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
                        <a onClick={(e) => e.preventDefault()} className="btn btn-sm btn-info" href={`/auto/${this.state.selectedPlace.id}/view`}>
                            <i className="fa fa-fw fa-eye"></i> view
                        </a>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

Maps.propTypes = {
    markers: PropTypes.array.isRequired
};

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(Maps)