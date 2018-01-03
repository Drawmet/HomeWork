import * as AppActions from '../actions/appActions';

const defaultState = {
    rehydrated: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case AppActions.ACTION_APP_REHYDRATION_COMPLETE:
            return {
                ...state,
                rehydrated: true
            };
        default:
            return state;
    }
}