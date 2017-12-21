import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 *
 */
class CarAdd extends Component {
    state = {
        show: false,
        mark: '',
        model: '',
        year: '',
        image: '',
        latitude: '',
        longitude: ''
    };

    dataSubmit = () => {
        const {
            mark,
            model,
            year,
            image,
            latitude,
            longitude
        } = this.state;

        this.props.addNewCar({
            mark,
            model,
            year,
            image,
            latitude,
            longitude
        });

        this.setState({show: false});
    };

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.setState({show: true})}>Add car</button>

                {
                    this.state.show &&
                    <div className="modal" role="dialog" style={{display: 'block'}}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Car</h5>
                                </div>
                                <div className="modal-body offset-md-2">
                                    <form className="form">
                                        <label>
                                            Mark
                                            <input className='form-control' onChange={({target: {value}}) => this.setState({mark: value})}/>
                                        </label>
                                        <label>
                                            Model
                                            <input className='form-control' onChange={({target: {value}}) => this.setState({model: value})}/>
                                        </label>
                                        <label>
                                            Year
                                            <input className='form-control' onChange={({target: {value}}) => this.setState({year: value})}/>
                                        </label>
                                        <label>
                                            Photo
                                            <input className='form-control' onChange={({target: {value}}) => this.setState({image: value})}/>
                                        </label>
                                        <label>
                                            Latitude
                                            <input className='form-control' onChange={({target: {value}}) => this.setState({latitude: value})}/>
                                        </label>
                                        <label>
                                            Longitude
                                            <input className='form-control' onChange={({target: {value}}) => this.setState({longitude: value})}/>
                                        </label>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-primary"
                                        onClick={this.dataSubmit}
                                    >OK</button>
                                    <button
                                        className="btn btn-default"
                                        onClick={() => this.setState({show: false})}
                                    >Close</button>
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

