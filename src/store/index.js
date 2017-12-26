import {applyMiddleware, combineReducers, createStore} from 'redux';
import car from './reducers/carReducer';
import user from './reducers/userReducer';
import users from './reducers/usersReducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';
import * as CarActions from "./actions/carActions";
import * as UsersActions from './actions/usersActions';

const middleware = [
    thunk,
    createLogger()
];

const store = createStore(
    combineReducers({
        car,
        user,
        users
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
});//.purgeAll();

export default store;