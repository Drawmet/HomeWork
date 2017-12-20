import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import store from './store';

import './index.css';
import App from './App';
import Admin from './components/Admin';
import User from './components/User';

import Auto from './routes/auto';
import AutoItemContainer from "./containers/AutoItemContainer";
import Autos from "./components/Autos";


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' children={({match}) => (
                <App match={match}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/auto' />}/>
                        <Route exact path='/auto' component={Autos}/>
                        <Route path='/auto/:name' component={AutoItemContainer}/>
                        <Route exact path='/user' component={User}/>
                        <Route exact path='/admin' component={Admin}/>
                    </Switch>
                </App>
            )} />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
