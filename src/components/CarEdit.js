import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

                {/*<AutoEditCard item={car} />*/}
                <div className="col-4">
                    <div className="card" style={{width: '20rem'}}>
                        <img className="card-img-top" style={{height: '150px'}} src={item.image} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{item.mark} - {item.model}</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {/*<li className="list-group-item">*/}
                                {/*Mark:*/}
                                {/*<input*/}
                                    {/*type='text'*/}
                                    {/*value={this.state.mark}*/}
                                    {/*onChange={({target: {value}}) => this.setState({type: value})}*/}
                                {/*/>*/}
                            {/*</li>*/}
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
                        <button
                            className="btn btn-primary"
                            onClick={this.dataSubmit}
                        >
                            Save
                        </button>
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

// const AutoEditCard = ({item}) => (
//
//
// );
//плагин н инпут type file чтоб можн было взять картинку с рабочего стола и закинуть, с реализацией drug&drop
export default AutoEdit;