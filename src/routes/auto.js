import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CarAdd from '../components/CarAdd'
import AutoItemContainer from "../containers/AutoItemContainer";
import AutoListContainer from "../containers/AutoListContainer";

const Auto = () => (
    <Switch>
        <Route exact path='/auto' component={AutoListContainer}/>
        <Route path='/auto/:name' component={AutoItemContainer}/>
        <Route path='/auto/add/:name' component={CarAdd}/>
    </Switch>
);

export default Auto;