import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Maps from './components/Maps';
import logo from './logo.svg';
import './App.css';
import img from './assets/auto_icon.png';

class App extends Component {
  render() {
      const markers = [{
          name:"first",
          location:{
              lat: 50.3,
              lng: 30.3,
          },
          img: img
      }];
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
              <Maps markers={markers}/>
          </div>

      </div>
    );
  }
}

export default App;
