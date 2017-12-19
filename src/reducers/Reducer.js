import actionsTypes from '../actions/actionsTypes.js'

const defaultState = {
    list: [],
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case actionsTypes.GET_LIST_CARS:
            return {
                list: action.list
            };
        case actionsTypes.ADD_CAR:
            return {
                // ...state,
                // list: action.payload.coordinates
            };
        case actionsTypes.EDIT_CAR:
            return {
                // ...state,
                // list: action.payload.coordinates
            };
        case actionsTypes.DELETE_CAR:
            return {
                // ...state,
                // list: action.payload.coordinates
            };
        default:
            return state;
    }
}