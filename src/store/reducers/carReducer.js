import * as CarActions from '../actions/carActions.js'

const defaultState = {
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CarActions.ACTION_CAR_GET_LIST:
            return {
                ...action.payload
            };
        case CarActions.ACTION_CAR_ADD:
            return {
                // ...state,
                // list: action.payload.coordinates
            };
        case CarActions.ACTION_CAR_EDIT:
            return {
                // ...state,
                // list: action.payload.coordinates
            };
        case CarActions.ACTION_CAR_DELETE:
            return {
                // ...state,
                // list: action.payload.coordinates
            };
        default:
            return state;
    }
}