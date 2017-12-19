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

    markerOnClick = ({name, position}) => {
        const img = this.props.markers
            .filter(item => item.name === name)[0].img;

        this.setState({
            showingInfoWindow: true,
            selectedPlace: {
                name: name,
                position: position,
                img: img
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
            navigator.geolocation.getCurrentPosition(({coords}) => this.setState({
                position: {
                    lat: coords.latitude,
                    lng: coords.longitude,
                }
            }));
        }
    }

    render() {
        const markersOnMap = this.props.markers.map((item, index) => (
            <Marker
                key={"marker_" + index}
                title={item.name}
                name={item.name}
                position={item.location}
                onClick={this.markerOnClick}
            />
        ));

        return (
            <Map
                google={this.props.google}
                zoom={11}
                className={'map'}
                initialCenter={this.state.position}
                style={{
                    position: 'relative',
                    width: '100%',
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
                        <h1>{this.state.selectedPlace.name}</h1>
                        <img
                            src={this.state.selectedPlace.img}
                            width={150}
                            height={100}
                            alt={''}
                        />
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