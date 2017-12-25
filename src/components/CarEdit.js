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
                                    className="form-control"
                                    value={this.state.model}
                                    onChange={({target: {value}}) => this.setState({model: value})}
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Type:
                                <input
                                      type='text'
                                      className="form-control"
                                      value={this.state.type}
                                      onChange={({target: {value}}) => this.setState({type: value})}
                                />
                            </label>
                        </div>
                        <div className="form-group"
                            style={{color: item.color}}>
                            <label>
                                Color:
                                <input
                                      type='text'
                                      className="form-control"
                                      value={this.state.color}
                                      onChange={({target: {value}}) => this.setState({color: value})}
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                latitude:
                                <input
                                    type='text'
                                    className="form-control"
                                    value={this.state.latitude}
                                    onChange={({target: {value}}) => this.setState({latitude: value})}
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                longitude:
                                <input
                                    type='text'
                                    className="form-control"
                                    value={this.state.longitude}
                                    onChange={({target: {value}}) => this.setState({longitude: value})}
                                />
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