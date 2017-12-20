import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component {
    render() {
        return (
            <div className="col-9">
                <Link to="/">
                    <p className="btn btn-primary">
                        back
                    </p>
                </Link>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name: User
                    </li>
                    <li className="list-group-item">
                        Age: 18+
                    </li>
                    <li className="list-group-item">
                        Work: Front-end Developer
                    </li>
                </ul>
            </div>
        )
    }
}