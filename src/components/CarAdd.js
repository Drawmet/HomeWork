import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

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
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.setState({show: true})}>Add car
                </button>

                {
                    this.state.show &&
                    <div className="modal" role="dialog" style={{display: 'block'}}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Car</h5>
                                </div>
                                <div className="modal-body offset-md-2">
                                    <form
                                        style={{width: '20rem'}}
                                    >
                                        <div className="form-group">
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
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-primary"
                                        onClick={this.dataSubmit}
                                    >OK
                                    </button>
                                    <button
                                        className="btn btn-default"
                                        onClick={() => this.setState({show: false})}
                                    >Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

CarAdd.propTypes = {
    addNewCar: PropTypes.func.isRequired
};


export default CarAdd;

