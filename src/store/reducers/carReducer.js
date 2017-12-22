import * as CarActions from '../actions/carActions.js'

const defaultState = {
    list: [],
    selected: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CarActions.ACTION_CAR_GET_LIST:
            return {
                ...state,
                ...action.payload
            };
        case CarActions.ACTION_CAR_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    ...action.payload
                ]
            };
        case CarActions.ACTION_CAR_GET_NORMALIZE_LIST:
            return {
                ...action.payload
            };
        case CarActions.ACTION_CAR_GET_BY_ID:
            return {
                ...action.payload
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