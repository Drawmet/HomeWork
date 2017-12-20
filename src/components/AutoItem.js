import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// import img from '../assets/auto_icon.png';
import Maps from '../components/Maps';
import CarAddContainer from '../containers/CarAddContainer'

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
            const item1 = list.find(item => item.name === match.params.name);
            const item = list.find(item => item.name === match.params.name).items.map((item, index) =>{
                return(
                    <ul key={index}>
                        <li>{item.type}</li>
                        <li>{item.model}</li>
                        <li style={{color : item.color}}>{item.color}</li>
                        <li>latitude: {item.latitude}, longitude: {item.longitude}
                        </li>
                        <li>
                            <img alt="" style={{width: '100px'}} src={item.image} />
                        </li>
                    </ul>
                )
            });

            return (
                <div className="container">
                    <Link to="/auto">
                        <p>
                            back
                        </p>
                    </Link>
                    {item}
                    <CarAddContainer/>
                    <Maps markers={item1.items}/>
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