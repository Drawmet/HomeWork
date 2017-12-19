import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Admin from './components/Admin';
import Autos from './components/Autos';
import User from './components/User';
import {Route, Switch} from 'react-router-dom';
import AutoItem from "./components/AutoItem";

const store = createStore(
    Reducer,
    applyMiddleware(thunk)
);

const Auto = () => (
    <Switch>
        <Route exact path='/auto' component={Autos}/>
        <Route path='/auto/:name' component={AutoItem}/>
    </Switch>
);

ReactDOM.render((
    <Provider { ...{store}}>
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
registerServiceWorker();
