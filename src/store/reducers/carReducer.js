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
                list: state.list.map(item => (item.id === action.payload.id) ? action.payload : item)
            };
        case CarActions.ACTION_CAR_DELETE:
            return {
                ...state,
                list: state.list.filter((car) => car.id !== action.payload.id)
            };
        case CarActions.ACTION_CAR_ADD_TO_BASKET:
            return {
                ...state,
                ...action.payload

            };
        default:
            return state;
    }
}