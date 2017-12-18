import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Admin extends Component{
    render() {
        return (
            <div className="container">
                <Link to="/">
                    <p>
                        back
                    </p>
                </Link>
                <ul>
                    <li>
                        Name: Admin
                    </li>
                    <li>
                        Password: Admin
                    </li>
                    <li>
                        Secret: MyAdmin
                    </li>
                </ul>
            </div>
        )
    }
}