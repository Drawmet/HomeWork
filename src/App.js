import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
            <ul className="list-group">
                <Link to="/auto">
                    <li className="list-group-item list-group-item-action">
                        Auto
                    </li>
                </Link>
                <Link to="/user">
                    <li className="list-group-item list-group-item-action">
                        User
                    </li>
                </Link>
                <Link to="/admin">
                    <li className="list-group-item list-group-item-action">
                        Admin
                    </li>
                </Link>
            </ul>
        </div>

    </div>
);

export default App;
