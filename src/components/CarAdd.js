import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

/**
 *
 */
class CarAdd extends Component {
    state = {
        show: false,
        mark: '',
        model: '',
        type: '',
        color: '',
        image: '',
        latitude: '',
        longitude: ''
    };

    dataSubmit = () => {
        const {
            mark,
            model,
            type,
            color,
            image,
            latitude,
            longitude
        } = this.state;

        this.props.addNewCar({
            mark,
            model,
            type,
            color,
            image,
            latitude,
            longitude
        });

        this.setState({show: false});
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
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({mark: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-model">Model</label>
                        <input
                            id='new-model'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({model: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-type">Type</label>
                        <input
                            id="new-type"
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({type: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-color'>Color</label>
                        <input
                            id='new-color'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({color: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-lat'>Latitude</label>
                        <input
                            id='new-lat'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({latitude: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-lng'>Longitude</label>
                        <input
                            id='new-lng'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({longitude: value})}
                        />
                    </div>
                    <div className="form-group">
                        <Link
                            className="btn btn-primary"
                            onClick={this.dataSubmit}
                            to='/auto'
                        >
                            Save
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

CarAdd.propTypes = {
    addNewCar: PropTypes.func.isRequired
};


export default CarAdd;

