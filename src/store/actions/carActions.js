import {SERVER_URL} from "../../utils/constants";

export const ACTION_CAR_ADD = "ACTION_CAR_ADD";
export const ACTION_CAR_EDIT = "ACTION_CAR_EDIT";
export const ACTION_CAR_DELETE = "ACTION_CAR_DELETE";
export const ACTION_CAR_INITIALIZE = "ACTION_CAR_INITIALIZE";
export const ACTION_CAR_GET_LIST = "ACTION_CAR_GET_LIST";
export const ACTION_CAR_GET_NORMALIZE_LIST = "ACTION_CAR_GET_NORMALIZE_LIST";
export const ACTION_CAR_GET_BY_ID = "ACTION_CAR_GET_BY_ID";
export const ACTION_CAR_ADD_TO_BASKET = "ACTION_CAR_ADD_TO_BASKET";

/**
 * Get prepared list of cars to state.
 */
export function getCarsToStateAction() {

    return dispatch => {
        fetch(`${SERVER_URL}/api/cars/`)
            .then(res => {
                if (res.ok)
                    return res.json();
                res.text().then(data => {
                    const {status, statusText} = res;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {
            return dispatch({
                type: ACTION_CAR_INITIALIZE,
                payload: {
                    list: data
                }
            });
        }).catch(error => console.error(error));
    }
}

/**
 *
 * @param id
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
            payload: {
                ...car
            }
        };
    }
}

/**
 * Action for create new car object.
 *
 * @param data Object that describes new car object.
 */
export function addCarAction(data) {

    return dispatch => {
        fetch(`${SERVER_URL}/api/cars/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                res.text().then(data => {
                    const {status, statusText} = res;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {
            return dispatch({
                type: ACTION_CAR_ADD,
                payload: {
                    ...data
                }
            });
        }).catch(error => console.error(error));
    }
}

/**
 *
 * @param name
 * @param properties
 */

export function editCarAction(data) {
    return (dispatch, getState) => {
        fetch(`${SERVER_URL}/api/cars/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                res.text().then(data => {
                    const {status, statusText} = res;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {
            return dispatch({
                type: ACTION_CAR_EDIT,
                payload: {
                    ...data
                }
            });
        }).catch(error => console.error(error));
    }
}

/**
 *
 * @param name
 * @param properties
 */
export function deleteCarAction(id) {
    return (dispatch) => {
        fetch(`${SERVER_URL}/api/cars/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => dispatch({
                type: ACTION_CAR_DELETE,
                payload: {id}
            }))
            .catch(error => console.error(error));
    }
}



