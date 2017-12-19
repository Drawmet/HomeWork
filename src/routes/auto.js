import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Autos from '../components/Autos';
import AutoItemContainer from "../containers/AutoItemContainer";

const Auto = () => (
    <Switch>
        <Route exact path='/auto' component={Autos}/>
        <Route path='/auto/:name' component={AutoItemContainer}/>
    </Switch>
);

export default Auto;