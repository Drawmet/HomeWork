import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Admin extends Component {
    render() {
        return (
            <div className="col-sm-9">
                <Link to="/">
                    <p className="btn btn-primary">back</p>
                </Link>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name: Admin
                    </li>
                    <li className="list-group-item">
                        Password: Admin
                    </li>
                    <li className="list-group-item">
                        Secret: MyAdmin
                    </li>
                </ul>
            </div>
        )
    }
}