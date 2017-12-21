import uuid from 'uuid';
import CarList from '../../data/cars';

export const ACTION_CAR_GET_COORDINATES = "ACTION_CAR_GET_COORDINATES";
export const ACTION_CAR_ADD = "ACTION_CAR_ADD";
export const ACTION_CAR_EDIT = "ACTION_CAR_EDIT";
export const ACTION_CAR_DELETE = "ACTION_CAR_DELETE";
export const ACTION_CAR_GET_LIST = "ACTION_CAR_GET_LIST";
export const ACTION_CAR_GET_NORMALIZE_LIST = "ACTION_CAR_GET_NORMALIZE_LIST";
export const ACTION_CAR_GET_BY_ID = "ACTION_CAR_GET_BY_ID";

/**
 * Get prepared list of cars.
 */
export function getListCarsAction() {
    return {
        type: ACTION_CAR_GET_LIST,
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
 *
 * @param name
 * @param properties
 */

export function getNormalizeListCarsAction() {
    return (dispatch, getState) => {
        const NormalizeList = [];

        getState().car.list.forEach((item) => {
            item.items.map((car) =>
                NormalizeList.push({
                    ...car,
                    name: item.name
                }));
            return item.items;
        });

        return {
            type: ACTION_CAR_GET_NORMALIZE_LIST,
            payload: {
                NormalizeList
            }
        };
    };
}

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

        console.log(carList);


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
export function editCarAction(name, properties) {
    return {
        type: ACTION_CAR_EDIT
    }
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