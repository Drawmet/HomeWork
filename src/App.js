import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Admin from "./components/Admin";
import Auto from "./routes/auto";
import Menu from "./components/Menu";
import User from "./components/User";

import Breadcrumbs from './components/Breadcrumb';
import Loader from "./components/Loader";

class App extends Component {
    state ={
        rehydrated: false
    };

    componentDidMount(){
        setInterval(() => {
            if(!this.state.rehydrated){
                this.setState({
                    rehydrated: this.props.rehydrated
                })
            }
        },1000)
    }


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
            );
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                    <button
                        className='btn btn-danger'
                        onClick={() => this.props.logoutUser()}
                        disabled={!this.props.loggedIn}
                    >
                        Log out
                    </button>
                </header>
                <Breadcrumbs/>
                { this.state.rehydrated ? this.renderRoutes() : <Loader /> }
            </div>
        );
    }
}

export default App;
