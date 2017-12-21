import * as UserActions from '../actions/userActions.js'

const defaultState = {
    err: '',
    loggedIn: false,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UserActions.ACTION_USER_LOGIN_CORRECT:
            return {
                ...action.payload
            };
        case UserActions.ACTION_USER_LOGIN_INCORRECT_USERNAME:
            return {
                ...action.payload
            };
        case UserActions.ACTION_USER_LOGIN_INCORRECT_PASSWORD:
            return {
                ...action.payload
            };
        case UserActions.ACTION_USER_LOGIN_CHECK:
            return {
                ...state.user
            };
        default:
            return state;
    }
}