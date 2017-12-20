import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Admin from "./components/Admin";
import Auto from "./routes/auto";
import Menu from "./components/Menu";
import User from "./components/User";

import Breadcrumbs from './components/Breadcrumb';

class App extends Component {
    render(){
        const {loggedIn, authenticationUser} = this.props;
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Breadcrumbs/>
                <div className="container">
                    <div className="row">
                        <Route exact path="/" render={() => (
                            loggedIn ? (
                            <Menu/> ) : (
                            <Login loggedIn={loggedIn} authenticationUser={authenticationUser} />))}
                        />
                        <Route path="/menu" render={() => (
                            loggedIn ? (
                            <Menu/> ) : (
                            <Redirect to="/"/>))}
                        />
                        <Route path="/admin" render={() => (
                            loggedIn ? (
                            <Admin/> ) : (
                            <Redirect to="/"/>))}
                        />
                        <Route path="/auto" render={() => (
                            loggedIn ? (
                            <Auto/> ) : (
                            <Redirect to="/"/> ))}
                        />
                        <Route path="/user" render={() => (
                            loggedIn ? (
                            <User/> ) : (
                            <Redirect to="/"/> ))}
                        />
                    </div>
                </div>
            </div>
);

export default App;
