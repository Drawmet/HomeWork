import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component {
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
                        Name: User
                    </li>
                    <li>
                        Age: 18+
                    </li>
                    <li>
                        Work: Front-end Developer
                    </li>
                </ul>
            </div>
        )
    }
}