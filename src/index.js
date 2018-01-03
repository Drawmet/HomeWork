import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import store from './store';

import './index.css';
import AppContainer from "./containers/AppContainer";
import {StripeProvider} from 'react-stripe-elements';

ReactDOM.render((
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <AppContainer/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </StripeProvider>
), document.getElementById('root'));
