import React from 'react';
import {Link} from 'react-router-dom';
import api from '../data/cars';

/**
 *
 */
const Autos = () => {
    const itemsCars = api.map((item, index) => (
        <Link
            key={index}
            to={`/auto/${item.name}`}
        >
            <li className="list-group-item list-group-item-action">
                {item.name}
            </li>
        </Link>
    ));

    return (
        <div className="container">
            <Link to="/">
                <p className="btn btn-primary">back</p>
            </Link>
            <ul className="list-group">{itemsCars}</ul>
        </div>
    )
};

Autos.propTypes = {};

export default Autos;