import * as CarActions from '../actions/carActions.js'

const defaultState = {
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CarActions.ACTION_CAR_GET_LIST:
            return {
                ...state,
                ...action.payload
            };
        case CarActions.ACTION_CAR_ADD:
            const {
                mark,
                model,
                year,
                image,
                latitude,
                longitude
            } = action.payload.data;

            const car = {
                model,
                year,
                image,
                latitude,
                longitude
            };

            const brand = state.list.find((brand) => brand.name === mark);

            if (brand) {
                const updatedBrand = {
                    ...brand,
                    items: [
                        ...brand.items,
                        car
                    ]
                };

                return {
                    ...state,
                    list: state.list.map((item) => {
                        if (item === brand) {
                            return updatedBrand;
                        }

                        return item;
                    })
                };
            }

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        name: mark,
                        items: [
                            car
                        ]
                    }
                ]
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