import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Maps from './Maps';
import {Link} from "react-router-dom";


/**
 *
 */
class CarAdd extends Component {
    state = {
        mark: '',
        markIsValid: 'form-control',
        model: '',
        modelIsValid: 'form-control',
        type: '',
        typeIsValid: 'form-control',
        color: '',
        colorIsValid: 'form-control',
        image: '',
        imageIsValid: 'form-control',
        latitude: '',
        latitudeIsValid: 'form-control',
        longitude: '',
        longitudeIsValid: 'form-control',
    };

    getPositionOnMap = ({lat, lng}) => {
        this.setState({
            latitude: lat,
            longitude: lng
        })
    };

    dataSubmit = (e) => {

        const {
            mark,
            model,
            type,
            color,
            image,
            latitude,
            longitude
        } = this.state;

        if(this.state.mark === '' || this.state.model === '' || this.state.type === '' || this.state.color === '' || this.state.latitude === '' || this.state.longitude === ''){
            this.setState({
                markIsValid: mark === '' ? 'form-control is-invalid' : 'form-control is-valid',
                modelIsValid: model === '' ? 'form-control is-invalid' : 'form-control is-valid',
                typeIsValid: type === '' ? 'form-control is-invalid' : 'form-control is-valid',
                colorIsValid: color === '' ? 'form-control is-invalid' : 'form-control is-valid',
                latitudeIsValid: latitude === '' ? 'form-control is-invalid' : 'form-control is-valid',
                longitudeIsValid: longitude === '' ? 'form-control is-invalid' : 'form-control is-valid',
            });
            e.preventDefault();
        } else {
            this.props.addNewCar({
            mark,
            model,
            type,
            color,
            image,
            latitude,
            longitude
        });
        }
    };

    renderDropzoneContent = () => {
        if (this.state.image.length) {
            return (
                <img
                    className="card-img-top"
                    style={{height: '150px'}}
                    src={this.state.image}
                    alt=""
                />
            );
        }

        return (
            <p style={{padding: '7px'}}>
                Dropping new image here, or click to select files to upload. Only *.jpeg and *.png images will be
                accepted
            </p>
        );
    };

    render() {
        return (
            <div className='container'>
                <Link to="/auto">
                    <p className="btn btn-primary">
                        back
                    </p>
                </Link>
                <form
                    className="d-flex flex-column align-items-center card"
                    style={{width: '20rem'}}
                >
                    <div
                        className="form-group"
                        style={{padding: '20px'}}
                    >
                        <label htmlFor='new-photo'>Photo</label>
                        <Dropzone
                            id='new-photo'
                            className="card-img-top card"
                            style={{height: '150px'}}
                            accept="image/jpeg, image/jpg, image/png"
                            multiple={false}
                            onDrop={(accepted) => {
                                this.setState({image: accepted.map(f => f.preview).join('')})
                            }}
                        >
                            {this.renderDropzoneContent()}
                        </Dropzone>
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-mark">Mark</label>
                        <input
                            id="new-mark"
                            className={this.state.markIsValid}
                            onChange={({target: {value}}) => this.setState({mark: value})}
                        />
                        <div className="invalid-feedback">
                            Please provide a valid mark.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-model">Model</label>
                        <input
                            id='new-model'
                            className={this.state.modelIsValid}
                            onChange={({target: {value}}) => this.setState({model: value})}
                        />
                        <div className="invalid-feedback">
                            Please provide a valid model.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-type">Type</label>
                        <input
                            id="new-type"
                            className={this.state.typeIsValid}
                            onChange={({target: {value}}) => this.setState({type: value})}
                        />
                         <div className="invalid-feedback">
                            Please provide a valid type.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-color'>Color</label>
                        <input
                            id='new-color'
                            className={this.state.colorIsValid}
                            onChange={({target: {value}}) => this.setState({color: value})}
                        />
                         <div className="invalid-feedback">
                            Please provide a valid color.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-lat'>Latitude</label>
                        <input
                            id='new-lat'
                            className={this.state.latitudeIsValid}
                            type="number"
                            value={this.state.latitude}
                            onChange={({target: {value}}) => this.setState({latitude: value})}
                        />
                         <div className="invalid-feedback">
                            Please provide a valid latitude.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-lng'>Longitude</label>
                        <input
                            id='new-lng'
                            className={this.state.longitudeIsValid}
                            type="number"
                            value={this.state.longitude}
                            onChange={({target: {value}}) => this.setState({longitude: value})}
                        />
                         <div className="invalid-feedback">
                            Please provide a valid longitude.
                        </div>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-primary' onClick={this.dataSubmit}>Save</button>
                    </div>
                </form>
                <Maps markers={this.state} type="add" getPositionOnMap={this.getPositionOnMap}/>
            </div>
        )
    }
}

CarAdd.propTypes = {
    addNewCar: PropTypes.func.isRequired
};


export default CarAdd;

