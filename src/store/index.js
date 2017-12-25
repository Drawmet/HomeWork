import {applyMiddleware, combineReducers, createStore} from 'redux';
import car from './reducers/carReducer';
import user from './reducers/userReducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';
import * as CarActions from "./actions/carActions";

const middleware = [
    thunk,
    createLogger()
];

const store = createStore(
    combineReducers({
        car,
        user
    }),
    applyMiddleware(...middleware),
    autoRehydrate()
);

persistStore(store, {
    whitelist: ['car', 'user']
}, () => {
    if (!store.getState().car.list.length) {
        store.dispatch(CarActions.getCarsToStateAction());
    }
});//.purgeAll();

export default store;