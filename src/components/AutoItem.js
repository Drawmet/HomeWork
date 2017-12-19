import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// import img from '../assets/auto_icon.png';
import Maps from '../components/Maps';

/**
 *
 */
class AutoItem extends Component {
    componentDidMount() {
        this.props.getListCars();
    }

    render() {
        const {list, match} = this.props;

        if (list.length > 0) {
            const item = list.filter(item => item.name === match.params.name)[0].items.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>{item.type}</li>
                        <li>{item.model}</li>
                        <li style={{color: item.color}}>{item.color}</li>
                        <li>latitude: {item.latitude}, longitude: {item.longitude}
                        </li>
                        <li>
                            <img alt="" style={{width: '100px'}} src={item.image}/>
                        </li>
                    </ul>
                )
            });

            const markers = [{
                name: "first",
                location: {
                    lat: 50.3,
                    lng: 30.3,
                },
                // img: img
            }];

            return (
                <div className="container">
                    <Link to="/auto">
                        <p>
                            back
                        </p>
                    </Link>
                    {item}
                    <Maps markers={markers}/>
                </div>
            );
        }

        return (<div></div>);
    }
}

AutoItem.propTypes = {
    list: PropTypes.array.isRequired,
    match: PropTypes.any
};

export default AutoItem;