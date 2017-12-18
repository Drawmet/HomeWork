import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../data/api';

export default class Autos extends Component{
    render() {

        const itemsCars = api.map((item, index) => {
            return (
                <Link key={index} to={`/auto/${item.name}`}>
                    <li>
                        {item.name}
                    </li>
                </Link>
            )
        });

        return (
            <div className="container">
                <Link to="/">
                    <p>
                        back
                    </p>
                </Link>
                <ul>
                    {itemsCars}
                </ul>
            </div>
        )
    }
}