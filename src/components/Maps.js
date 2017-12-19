import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

const API_KEY = 'AIzaSyBlDpfrN6jHhBh74bu1Z6QkD_wlzYgYEeo';

export class Maps extends Component {
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            selectedPlace: {},
            position: {
                lat: 50.5,
                lng : 30.5
            },
        }
    }

    markerOnClick = (e) => {
        const img = this.props.markers.filter(item => item.name === e.name)[0].img;
        this.setState({
            showingInfoWindow: true,
            selectedPlace: {
                name: e.name,
                position: e.position,
                img: img
            }
        })
    };

    infoWindowClose = () => {
        this.setState({
            showingInfoWindow: false,
        })
    };

    componentDidMount(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.setState({
                    position:{
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                    }
                });
            });
        }
    }



    render(){
        const markersOnMap = this.props.markers.map((item, index) => {
            return (
                    <Marker title={item.name}
                        name={item.name}
                        position={item.location}
                        key={"marker_" +  index}
                        onClick={this.markerOnClick}
                    />
            )
        });
        return (
            <Map google={this.props.google}
                 zoom={11}
                 className={'map'}
                 initialCenter={this.state.position}
                 style={{width: '100%', height: '80%', position: 'relative'}}
            >
                {markersOnMap}
                <InfoWindow visible={this.state.showingInfoWindow} onClose={this.infoWindowClose} position={this.state.selectedPlace.position}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        <img src={this.state.selectedPlace.img} alt={''} width={150} height={100}/>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(Maps)