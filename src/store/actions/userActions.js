import UserList from '../../data/users';

export const ACTION_USER_LOGIN_CORRECT = "ACTION_USER_LOGIN_CORRECT";
export const ACTION_USER_LOGIN_INCORRECT_USERNAME = "ACTION_USER_LOGIN_INCORRECT_USERNAME";
export const ACTION_USER_LOGIN_INCORRECT_PASSWORD = "ACTION_USER_LOGIN_INCORRECT_PASSWORD";
export const ACTION_USER_LOGIN_CHECK = "ACTION_USER_LOGIN_CHECK";
export const ACTION_USER_LOGIN_OUT = "ACTION_USER_LOGIN_OUT";

/**
 * Get result authorization of users.
 */

export function authorizationUserAction(username, password) {
    const user = UserList.find(item => item.username === username);
    if (user) {
        if (user.password === password) {
            return {
                type: ACTION_USER_LOGIN_CORRECT,
                payload: {
                    err: '',
                    data: user,
                    loggedIn: true
                }
            }
        } else {
            return {
                type: ACTION_USER_LOGIN_INCORRECT_PASSWORD,
                payload: {
                    err: 'Incorrect Password',
                    loggedIn: false
                }
            }
        }
    }
    return {
        type: ACTION_USER_LOGIN_INCORRECT_USERNAME,
        payload: {
            err: 'Incorrect Username',
            loggedIn: false
        }
    }
}

export function logoutUserAction() {
    return (dispatch, getState) => {
        return dispatch({
            type: ACTION_USER_LOGIN_CHECK,
            payload: {
                err: '',
                loggedIn: false
            }
        })
    }
}

export function checkAuthorizationAction() {
    return (dispatch, getState) => {
        const currState = getState();
        return dispatch({
            type: ACTION_USER_LOGIN_OUT,
            payload: {
                ...currState.user
            }
        })
    }
}
