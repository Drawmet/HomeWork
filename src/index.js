import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';

import './index.css';
import App from './App';
import Admin from './components/Admin';
import User from './components/User';

import Auto from './routes/auto';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/auto' component={Auto}/>
                <Route path='/user' component={User}/>
                <Route path='/admin' component={Admin}/>

            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));