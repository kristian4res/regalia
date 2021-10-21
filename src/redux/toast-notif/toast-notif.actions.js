import { ToastActionTypes } from './toast-notif.types';

export const displayToast = (toastContent) => ({
    type: ToastActionTypes.DISPLAY_TOAST,
    payload: toastContent
});