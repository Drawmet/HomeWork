import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import store from './store';

import './index.css';
import App from './App';
import Admin from './components/Admin';
import User from './components/User';
import Menu from "./components/Menu";

import Auto from './routes/auto';

const {user: {loggedIn}} = store.getState();
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'
                       render={() => (
                         loggedIn ? ( <Redirect to="/menu"/>) : (<App/>))}
                />
                <Route path='/auto' component={Auto}/>
                <Route path='/menu' component={Menu}/>
                <Route path='/user' component={User}/>
                <Route path='/admin' component={Admin}/>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));