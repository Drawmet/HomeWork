import React, {Component} from 'react';
import {Link, Redirect, Route} from 'react-router-dom';

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
    dropDownUser = () => {
        return (
            <div className="dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.data.username}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="#">Photo</Link>
                    <Link className="dropdown-item" to="#">{this.props.data.name} {this.props.data.surname}</Link>
                    <Link
                        className='btn btn-danger ml-4'
                        to="#"
                        onClick={() => this.props.logoutUser()}
                        disabled={!this.props.loggedIn}
                    >
                        Log out
                    </Link>
                </div>
            </div>
        )
    };

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
                        <BasketContainer/>
                    ) : (
                        <Redirect to="/"/>))
                }/>
            </div>
        );
    };

    render() {

        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    <nav className="navbar navbar-dark bg-dark collapse navbar-collapse">
                        <div className="d-flex align-items-center">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <div className="dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Menu/>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex align-items-center">
                            <BasketInfo/>
                            {this.props.loggedIn ?
                                this.dropDownUser()
                                : ('not logged In')}
                        </div>

                    </nav>

                    {/*<h1 className="App-title">Welcome to React</h1>*/}

                    {/*<button*/}
                    {/*className='btn btn-success'*/}
                    {/*// onClick={() => this.props.logoutUser()}*/}
                    {/*>*/}
                    {/*<i className="fa fa-fw fa-shopping-basket"></i>*/}
                    {/*</button>*/}
                {/*</header>*/}
                <Breadcrumbs/>
                {this.props.rehydrated ? this.renderRoutes() : <Loader/>}
            </div>
        );
    }
}

export default connect(state => ({...state.app}))(App);
