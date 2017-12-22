import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Maps from '../components/Maps';


class AutoEdit extends Component {
    state = {
            image: '',
            mark:  '',
            model: '',
            type: '',
            color: '',
            latitude: '',
            longitude: ''
    };

    dataSubmit = () => {
        this.props.editCar({
            ...this.state
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
                    <p>
                        back
                    </p>
                </Link>

                <div className="col-4">
                    <div
                        className="card"
                        style={{width: '20rem'}}
                    >
                        <Dropzone
                            className="card-img-top"
                            style={{height: '150px'}}
                            accept="image/jpeg, image/jpg, image/png"
                            multiple={false}
                            onDrop={(accepted) => { console.log(accepted),this.setState({image: accepted.map(f=>f.preview).join('')})}}
                        >
                            {this.renderDropzoneContent()}
                        </Dropzone>

                        <div className="card-body">
                            <h4 className="card-title">{item.mark} - {item.model}</h4>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Model:
                                <input
                                    type='text'
                                    value={this.state.model}
                                    onChange={({target: {value}}) => this.setState({model: value})}
                                />
                            </li>
                            <li className="list-group-item">
                                Type:
                                <input
                                      type='text'
                                      value={this.state.type}
                                      onChange={({target: {value}}) => this.setState({type: value})}
                                />
                            </li>
                            <li className="list-group-item"
                                style={{color: item.color}}>
                                Color:
                                <input
                                      type='text'
                                      value={this.state.color}
                                      onChange={({target: {value}}) => this.setState({color: value})}
                                />
                            </li>
                            <li className="list-group-item">
                                latitude:
                                <input
                                    type='text'
                                    value={this.state.latitude}
                                    onChange={({target: {value}}) => this.setState({latitude: value})}
                                />
                            </li>
                            <li className="list-group-item">
                                longitude:
                                <input
                                    type='text'
                                    value={this.state.longitude}
                                    onChange={({target: {value}}) => this.setState({longitude: value})}
                                />
                            </li>
                        </ul>

                        <Link
                            className="btn btn-primary"
                            onClick={this.dataSubmit}
                            to={`/auto/${item.id}/view`}
                        >
                            Save
                        </Link>
                    </div>
                </div>
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