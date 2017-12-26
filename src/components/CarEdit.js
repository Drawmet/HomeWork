import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Maps from './Maps';


class AutoEdit extends Component {
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
            this.props.editCar({
                ...this.state
            })
        }
    };

    getPositionOnMap = ({lat, lng}) => {
        this.setState({
            latitude: lat,
            longitude: lng
        })
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
            <p>Dropping new image here, or click to select files to upload. Only *.jpeg and *.png images will be accepted</p>
        );
    };

    componentDidMount(){
        const {list, match: {params: {carid}}} = this.props;

        const car = list.find(car => car.id === carid);

        this.setState({
            ...car
        })
    }

    render() {
        const {list, match: {params: {carid}}} = this.props;

        const item = list.find((car) => car.id === carid);

        return (
            <div className="container">
                <Link to="/auto">
                    <p className="btn btn-primary">
                        back
                    </p>
                </Link>

                {/*<div className="col-4">*/}
                    <form
                        className="d-flex flex-column align-items-center card"
                        // className="card"
                        style={{width: '20rem'}}
                    >
                        {/*<div*/}
                            {/*className="card"*/}
                            {/*style={{width: '20rem'}}*/}
                        {/*>*/}
                        <div className="form-group">
                            <Dropzone
                                className="card-img-top"
                                style={{height: '150px'}}
                                accept="image/jpeg, image/jpg, image/png"
                                multiple={false}
                                onDrop={(accepted) => { this.setState({image: accepted.map(f=>f.preview).join('')})}}
                            >
                                {this.renderDropzoneContent()}
                            </Dropzone>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{item.mark} - {item.model}</h4>
                        </div>
                        <div className="form-group">
                            <label>
                                Model:
                                <input
                                    type="text"
                                    className={this.state.modelIsValid}
                                    value={this.state.model}
                                    onChange={({target: {value}}) => this.setState({model: value})}
                                />
                            <div className="invalid-feedback">
                                Please provide a valid model.
                            </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Type:
                                <input
                                      type='text'
                                      className={this.state.typeIsValid}
                                      value={this.state.type}
                                      onChange={({target: {value}}) => this.setState({type: value})}
                                />
                            <div className="invalid-feedback">
                                Please provide a valid type.
                            </div>
                            </label>
                        </div>
                        <div className="form-group"
                            style={{color: item.color}}>
                            <label>
                                Color:
                                <input
                                      type='text'
                                      className={this.state.colorIsValid}
                                      value={this.state.color}
                                      onChange={({target: {value}}) => this.setState({color: value})}
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid color.
                                </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                latitude:
                                <input
                                    type='text'
                                    className={this.state.latitudeIsValid}
                                    type="number"
                                    value={this.state.latitude}
                                    onChange={({target: {value}}) => this.setState({latitude: value})}
                                />
                            <div className="invalid-feedback">
                                Please provide a valid latitude.
                            </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                longitude:
                                <input
                                    type='text'
                                    className={this.state.longitudeIsValid}
                                    type="number"
                                    value={this.state.longitude}
                                    onChange={({target: {value}}) => this.setState({longitude: value})}
                                />
                            <div className="invalid-feedback">
                                Please provide a valid longitude.
                            </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <Link
                                className="btn btn-primary"
                                onClick={this.dataSubmit}
                                to={`/auto/${item.id}/view`}
                            >
                                Save
                            </Link>
                        </div>
                    </form>
                    <Maps markers={item} type='edit' getPositionOnMap={this.getPositionOnMap}/>
                {/*</div>*/}
            </div>


        );
    }
}

AutoEdit.propTypes = {
    editCar: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    match: PropTypes.any
};

export default AutoEdit;