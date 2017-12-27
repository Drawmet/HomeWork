import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Maps from '../components/Maps';

/**
 *
 */
const AutoItem = ({list, match: {params: {carid}}}) => {
    const car = list.find((car) => car.id === carid);

    return (
        <div className="container">
            <Link to="/auto">
                <p className="btn btn-primary">
                    back
                </p>
            </Link>

            <AutoItemCard item={car}/>

            <Maps
                markers={[car]}
                initialCenter={{
                    lat: car.latitude,
                    lng: car.longitude
                }}
            />
        </div>
    );
};

AutoItem.propTypes = {
    list: PropTypes.array.isRequired,
    match: PropTypes.any.isRequired
};

/**
 *
 */
const AutoItemCard = ({item}) => (
    <div className="col-4 mb-4">
        <div className="card" style={{width: '20rem'}}>
            <img className="card-img-top" style={{height: '150px'}} src={item.image} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{item.mark} - {item.model}</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: {item.type}</li>
                <li className="list-group-item" style={{color: item.color}}>Color: {item.color}</li>
                <li className="list-group-item">latitude: {item.latitude}</li>
                <li className="list-group-item">longitude: {item.longitude}</li>
            </ul>
        </div>
    </div>
);

AutoItemCard.propTypes = {
    item: PropTypes.shape({
        mark: PropTypes.string.isRequired,
        //...
    })
};

export default AutoItem;