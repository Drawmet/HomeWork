import * as CarActions from '../actions/carActions.js'

const defaultState = {
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CarActions.ACTION_CAR_INITIALIZE:
            return {
                ...state,
                ...action.payload
            };
        case CarActions.ACTION_CAR_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        case CarActions.ACTION_CAR_EDIT:
            return {
                ...state,
                ...action.payload
            };
        case CarActions.ACTION_CAR_DELETE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}