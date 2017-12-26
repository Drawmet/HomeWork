import uuid from 'uuid';
import UserList from '../../data/users';

export const ACTION_USER_ADD = "ACTION_USER_ADD";
export const ACTION_USER_EDIT = "ACTION_USER_EDIT";
export const ACTION_USER_DELETE = "ACTION_USER_DELETE";
export const ACTION_USER_INITIALIZE = "ACTION_USER_INITIALIZE";

/**
 * Get result authorization of users.
 */

export function getUsersToStateAction() {
    return {
        type: ACTION_USER_INITIALIZE,
        payload: {
            list: UserList.map((user) => ({
                id: uuid(),
                ...user
            }))
        }
    }
}

/**
 *
 * @param user
 */
export function editUserAction(user) {
    return (dispatch, getState) => {

        const users = getState().users.list.map((item) => item.id === user.id ? user : item);

        return dispatch({
            type: ACTION_USER_EDIT,
            payload: {
                list: [
                    ...users
                ]
            }
        })
    };
}

/**
 * Action for create new user object.
 *
 * @param data Object that describes new user object.
 */
export function addUserAction(data) {
    return {
        type: ACTION_USER_ADD,
        payload: {
            id: uuid(),
            ...data
        }
    }
}

export function deleteUserAction(id) {
    return (dispatch, getState) => {
        const users = getState().users.list.filter((user) => user.id !== id);
        return dispatch({
            type: ACTION_USER_DELETE,
            payload: {
                list: [
                    ...users
                ]
            }
        })
    };
}