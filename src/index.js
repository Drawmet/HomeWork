import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import store from './store';

import './index.css';
import AppContainer from "./containers/AppContainer";

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <AppContainer/>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
