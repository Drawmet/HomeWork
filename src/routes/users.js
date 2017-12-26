import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserListContainer from '../containers/UserListContainer';
import UserViewContainer from "../containers/UserViewContainer";
import UserEditContainer from "../containers/UserEditContainer";
import UserAddContainer from "../containers/UserAddContainer";


const Users = () => (
    <Switch>
        <Route exact path='/users' component={UserListContainer}/>
        <Route path='/users/:userid/view' component={UserViewContainer}/>
        <Route path='/users/:userid/edit' component={UserEditContainer}/>
        <Route path='/users/add' component={UserAddContainer}/>
    </Switch>
);

export default Users;