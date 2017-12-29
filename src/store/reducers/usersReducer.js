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
                ...state,
                list: state.list.map(item => (item.id === action.payload.id) ? action.payload : item)
            };
        case UsersActions.ACTION_USER_DELETE:
            return {
                ...state.users,
                list: state.list.filter((car) => car.id !== action.payload.id)
            };
        default:
            return state;
    }
}