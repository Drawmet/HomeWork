import {applyMiddleware, combineReducers, createStore} from 'redux';
import app from './reducers/appReducer';
import car from './reducers/carReducer';
import user from './reducers/userReducer';
import users from './reducers/usersReducer';
import basket from './reducers/basketReducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';
import * as CarActions from "./actions/carActions";
import * as UsersActions from './actions/usersActions';
import * as AppActions from "./actions/appActions";

const middleware = [
    thunk,
    createLogger()
];

const store = createStore(
    combineReducers({
        app,
        car,
        user,
        users,
        basket
    }),
    applyMiddleware(...middleware),
    autoRehydrate()
);

persistStore(store, {
    whitelist: ['car', 'user', 'users']
}, () => {
    if (!store.getState().car.list.length) {
        store.dispatch(CarActions.getCarsToStateAction());
    }
    if (!store.getState().users.list.length) {
        store.dispatch(UsersActions.getUsersToStateAction());
    }

    store.dispatch(AppActions.setRehydrationComplete());
});//.purgeAll();

export default store;