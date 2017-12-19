import React, {Component} from 'react';
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
            <li>
                {item.name}
            </li>
        </Link>
    ));

    return (
        <div className="container">
            <Link to="/">
                <p>back</p>
            </Link>
            <ul>{itemsCars}</ul>
        </div>
    )
};

Autos.propTypes = {};

export default Autos;