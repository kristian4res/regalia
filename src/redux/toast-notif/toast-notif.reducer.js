import { ToastActionTypes } from "./toast-notif.types";

const INITIAL_STATE = {
    toastList: []
}

const toastReducer = (currentState=INITIAL_STATE, action) => {
    switch (action.type) {
        case ToastActionTypes.DISPLAY_TOAST:
            return {
                ...currentState,
                toastList: [...currentState.toastList, action.payload]
            }
        default:
            return currentState;
    }
}

export default toastReducer;