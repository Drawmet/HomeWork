import {SERVER_URL} from "../../utils/constants";

export const ACTION_USER_ADD = "ACTION_USER_ADD";
export const ACTION_USER_EDIT = "ACTION_USER_EDIT";
export const ACTION_USER_DELETE = "ACTION_USER_DELETE";
export const ACTION_USER_INITIALIZE = "ACTION_USER_INITIALIZE";

/**
 * Get result authorization of users.
 */

export function getUsersToStateAction() {

    return dispatch => {
        fetch(`${SERVER_URL}/api/users`)
            .then(res => {
                if (res.ok)
                    return res.json();
                res.text().then(data => {
                    const { status, statusText } = res;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {

                return dispatch({
                    type: ACTION_USER_INITIALIZE,
                    payload: {
                        list: data
                    }
                });
        }).catch(error => console.error(error));
    }
}

/**
 *
 * @param user
 */
export function editUserAction(user) {
    return (dispatch) => {
        fetch(`${SERVER_URL}/api/users/${user.id}`,{
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                res.text().then(data => {
                    const { status, statusText } = res;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {
                return dispatch({
                type: ACTION_USER_EDIT,
                payload: {
                    ...data
                }
            });
        }).catch(error => console.error(error));
    }
}


/**
 * Action for create new user object.
 *
 * @param data Object that describes new user object.
 */
export function addUserAction(data) {

    return dispatch => {
        fetch(`${SERVER_URL}/api/users/`, {
            method: 'POST',
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
                    const { status, statusText } = res;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {
            return dispatch({
                type: ACTION_USER_ADD,
                payload: {
                    ...data
                }
            });
        }).catch(error => console.error(error));
    }
}
export function deleteUserAction(id) {
    return (dispatch) => {
        fetch(`${SERVER_URL}/api/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => dispatch({
                type: ACTION_USER_DELETE,
                payload: {id}
            }))
            .catch(error => console.error(error));
    }
}