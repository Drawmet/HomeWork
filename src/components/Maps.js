import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {API_KEY} from "../utils/constants";
import {Link} from "react-router-dom";

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
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(({coords}) => this.setState({
        //         position: {
        //             lat: coords.latitude,
        //             lng: coords.longitude,
        //         }
        //     }));
        // }
    }

    render() {
        const markersOnMap = this.props.markers.map((item, index) => (
            <Marker
                key={"marker_" + index}
                title={item.type}
                name={item.type}
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
                        <h1>{this.state.selectedPlace.type}</h1>
                        <p>{this.state.selectedPlace.model}</p>
                        <img
                            src={this.state.selectedPlace.image}
                            width={150}
                            height={100}
                            alt={''}
                        />
                        <Link className='btn btn-info' to={`/auto/:id/view`}/>
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