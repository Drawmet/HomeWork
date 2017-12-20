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
                <button onClick={() => this.setState({show: true})}>Add car</button>

                {
                    this.state.show &&
                    <div className="modal" role="dialog" style={{display: 'block'}}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Car</h5>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <p>Mark</p>
                                        <input onChange={({target: {value}}) => this.setState({mark: value})}/>
                                        <p>Model</p>
                                        <input onChange={({target: {value}}) => this.setState({model: value})}/>
                                        <p>Year</p>
                                        <input onChange={({target: {value}}) => this.setState({year: value})}/>
                                        <p>Photo</p>
                                        <input onChange={({target: {value}}) => this.setState({image: value})}/>
                                        <p>Latitude</p>
                                        <input onChange={({target: {value}}) => this.setState({latitude: value})}/>
                                        <p>Longitude</p>
                                        <input onChange={({target: {value}}) => this.setState({longitude: value})}/>
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

