import {SERVER_URL} from "../../utils/constants";

export const ACTION_BASKET_ADD = "ACTION_BASKET_ADD";

export function addBasketAction(data) {
    return {
        type: ACTION_BASKET_ADD,
        payload: {
            ...data
        }
    }
    
}
