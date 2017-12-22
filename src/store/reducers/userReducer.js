import * as UserActions from '../actions/userActions.js'
import {REHYDRATE} from "redux-persist/constants";

const defaultState = {
    user:{
        err: '',
        user: '',
        loggedIn: false,
        rehydrated: false
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UserActions.ACTION_USER_LOGIN_CORRECT:
            console.log(state.rehydrated);
            return {
                ...state.user,
                ...action.payload,
                rehydrated: state.rehydrated
            };
        case UserActions.ACTION_USER_LOGIN_INCORRECT_USERNAME:
            return {
                ...state.user,
                ...action.payload,
                rehydrated: state.rehydrated
            };
        case UserActions.ACTION_USER_LOGIN_INCORRECT_PASSWORD:
            return {
                ...state.user,
                ...action.payload,
                rehydrated: state.rehydrated
            };
        case UserActions.ACTION_USER_LOGIN_CHECK:
            return {
                ...state.user,
                ...action.payload,
                rehydrated: state.rehydrated
            };
        case REHYDRATE:
            return {
                ...state.user,
                ...action.payload.user,
                rehydrated: true
            };
        default:
            return state;
    }
}