import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AutoListContainer from "../containers/AutoListContainer";
import AutoItemContainer from "../containers/AutoItemContainer";
import AutoEditContainer from '../containers/AutoEditContainer';

const Auto = () => (
    <Switch>
        <Route exact path='/auto' component={AutoListContainer}/>
        <Route  path='/auto/:carid/view' component={AutoItemContainer}/>
        <Route path='/auto/:carid/edit' component={AutoEditContainer}/>
        {/*<Route path='/auto/view' component={()=><AutoItemContainer auto={auto}/>}/>*/}
    </Switch>
);

export default Auto;