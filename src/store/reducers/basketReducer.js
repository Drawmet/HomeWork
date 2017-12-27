import * as BasketActions from '../actions/basketActions';

const defaultState = {
    list: []
};

export default (state= defaultState, action) => {
    switch (action.type) {
        case BasketActions.ACTION_BASKET_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        default:
            return state;
    }
}