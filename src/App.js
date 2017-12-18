import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="container">
              <ul>
                  <Link to="/auto">
                      <li>
                          Auto
                      </li>
                  </Link>
                  <Link to="/user">
                      <li>
                          User
                      </li>
                  </Link>
                  <Link to="/admin">
                      <li>
                          Admin
                      </li>
                  </Link>
              </ul>
          </div>

      </div>
    );
  }
}

export default App;
