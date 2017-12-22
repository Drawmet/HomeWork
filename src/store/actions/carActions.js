import uuid from 'uuid';
import CarList from '../../data/cars';

export const ACTION_CAR_ADD = "ACTION_CAR_ADD";
export const ACTION_CAR_EDIT = "ACTION_CAR_EDIT";
export const ACTION_CAR_DELETE = "ACTION_CAR_DELETE";
export const ACTION_CAR_GET = "ACTION_CAR_GET";
export const ACTION_CAR_GET_LIST = "ACTION_CAR_GET_LIST";
export const ACTION_CAR_GET_NORMALIZE_LIST = "ACTION_CAR_GET_NORMALIZE_LIST";
export const ACTION_CAR_GET_BY_ID = "ACTION_CAR_GET_BY_ID";

/**
 * Get prepared list of cars to state.
 */
export function getCarsToStateAction() {
    return {
        type: ACTION_CAR_GET,
        payload: {
            list: CarList.reduce((acc, mark) => ([
                ...acc,
                ...mark.items.map((car) => ({
                    id: uuid(),
                    mark: mark.name,
                    ...car
                }))
            ]), [])
        }
    }
}

/**
 * Get prepared list of cars to table.
 */
export function getListCarsAction() {
    return (dispatch, getState) => {
        const currState = getState();
        return dispatch({
            type: ACTION_CAR_GET_LIST,
            payload: {
                ...currState.car
            }
        })
    }
}

/**
 *
 * @param name
 * @param properties
 */



export function getCarsByIdAction(id) {
    return (dispatch, getState) => {
        const {car: {list}} = getState();

        const carList = list.reduce((acc, mark) => ([
            ...acc,
            ...mark.items.map((car) => ({
                mark: mark.name,
                ...car
            }))
        ]), []);

        const car = carList.find(item => item.id === id);

        return {
            type: ACTION_CAR_GET_BY_ID,
            payload:{
                ...car
            }
        }
        // const NormalizeList = [];
        //
        // getState().car.list.forEach(
        //     (item) => item.items.map((car) => NormalizeList.push({
        //         ...car,
        //         name: item.name
        //     }))
        // );
        //
        // const car = NormalizeList.find((item) => item.id === id);
        //
        // dispatch({
        //     type: ACTION_CAR_GET_BY_ID,
        //     car
        // });
    }
}

// const normalizeCarList = [];
// const list = getState().car.list.map((item) => {
//     const newMassive = item.items.map((car) => {
//         return {
//             ...car,
//             name: item.name
//         }
//     });
//     normalizeCarList.concat(newMassive);
// });

/**
 * Action for create new car object.
 *
 * @param data Object that describes new car object.
 */
export function addCarAction(data) {
    return {
        type: ACTION_CAR_ADD,
        payload: {
            car: {
                id: uuid(),
                ...data
            }
        }
    }
}

/**
 *
 * @param name
 * @param properties
 */
export function editCarAction(car) {
    return (dispatch, getState) => {
        const cars  = getState().car.list.map((item) => item.id === car.id ? car : item);
        return dispatch({
            type: ACTION_CAR_EDIT,
            payload: {
                list: [
                    ...cars
                ]
            }
        })
    };
}

/**
 *
 * @param name
 * @param properties
 */
export function deleteCarAction(name, properties) {
    return {
        type: ACTION_CAR_DELETE
    }
}