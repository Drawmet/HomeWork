import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Elements} from 'react-stripe-elements';

import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Admin from "./components/Admin";
import Auto from "./routes/auto";
import Menu from "./components/Menu";
import Users from "./routes/users";
import BasketContainer from "./containers/BasketContainer";
import BasketInfo from './components/BasketInfo';

import Breadcrumbs from './components/Breadcrumb';
import Loader from "./components/Loader";
import {connect} from "react-redux";


class App extends Component {
    renderRoutes = () => {
        const {
            loggedIn,
            authenticationUser,
            err
        } = this.props;

        return (
            <div className="container">
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <Redirect to="/menu"/>
                    ) : (
                        <Login
                            loggedIn={loggedIn}
                            authenticationUser={authenticationUser}
                            err={err}
                        />
                    )
                )}/>
                <Route path="/menu" render={() => (
                    loggedIn ? (
                        <Menu/>) : (
                        <Redirect to="/"/>))}
                />
                <Route path="/admin" render={() => (
                    loggedIn ? (
                        <Admin/>) : (
                        <Redirect to="/"/>))}
                />
                <Route path="/auto" render={() => (
                    loggedIn ? (
                        <Auto/>) : (
                        <Redirect to="/"/>))}
                />
                <Route path="/users" render={() => (
                    loggedIn ? (
                        <Users/>) : (
                        <Redirect to="/"/>))}
                />
                <Route path="/basket" render={() => (
                    loggedIn ? (
                        <Elements>
                            <BasketContainer/>
                        </Elements>
                    ) : (
                        <Redirect to="/"/>))
                }/>
            </div>
        );
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                    <button
                        className='btn btn-danger mr-2'
                        onClick={() => this.props.logoutUser()}
                        disabled={!this.props.loggedIn}
                    >
                        Log out
                    </button>
                    <BasketInfo/>
                    {/*<button*/}
                    {/*className='btn btn-success'*/}
                    {/*// onClick={() => this.props.logoutUser()}*/}
                    {/*>*/}
                    {/*<i className="fa fa-fw fa-shopping-basket"></i>*/}
                    {/*</button>*/}
                </header>
                <Breadcrumbs/>
                {this.props.rehydrated ? this.renderRoutes() : <Loader/>}
            </div>
        );
    }
}

export default connect(state => ({...state.app}))(App);
