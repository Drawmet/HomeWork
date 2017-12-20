import {applyMiddleware, combineReducers, createStore} from 'redux';
import car from './reducers/carReducer';
import user from './reducers/userReducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

const middleware =[
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
    whitelist: ['car']
});

export default store;