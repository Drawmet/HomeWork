import * as UsersActions from '../actions/usersActions.js';

const defaultState = {
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UsersActions.ACTION_USER_INITIALIZE:
            return {
                ...state.users,
                ...action.payload
            };
        case UsersActions.ACTION_USER_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        case UsersActions.ACTION_USER_EDIT:
            return {
                ...state.users,
                ...action.payload
            };
        case UsersActions.ACTION_USER_DELETE:
            return {
                ...state.users,
                ...action.payload
            };
        default:
            return state;
    }
}