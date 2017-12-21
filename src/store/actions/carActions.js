import CarList from '../../data/cars';

export const ACTION_CAR_GET_COORDINATES = "ACTION_CAR_GET_COORDINATES";
export const ACTION_CAR_ADD = "ACTION_CAR_ADD";
export const ACTION_CAR_EDIT = "ACTION_CAR_EDIT";
export const ACTION_CAR_DELETE = "ACTION_CAR_DELETE";
export const ACTION_CAR_GET_LIST = "ACTION_CAR_GET_LIST";

/**
 * Get prepared list of cars.
 */
export function getListCarsAction() {
    return {
        type: ACTION_CAR_GET_LIST,
        payload: {
            list: CarList
        }
    }
}

/**
 *
 * @param name
 * @param properties
 */

export function addCarAction(data) {
    return {
        type: ACTION_CAR_ADD,
        payload: {data}
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