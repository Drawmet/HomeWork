import UserList from '../../data/users';

export const ACTION_USER_LOGIN_CORRECT = "ACTION_USER_LOGIN_CORRECT";
export const ACTION_USER_LOGIN_INCORRECT_USERNAME = "ACTION_USER_LOGIN_INCORRECT_USERNAME";
export const ACTION_USER_LOGIN_INCORRECT_PASSWORD = "ACTION_USER_LOGIN_INCORRECT_PASSWORD";
export const ACTION_USER_LOGIN_CHECK = "ACTION_USER_LOGIN_CHECK";

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
                    username: username,
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
