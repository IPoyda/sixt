import {SHOW_TOAST, RESET_TOAST} from "./action-types";

export const showToastMessage = (message: string) => ({
    type: SHOW_TOAST,
    payload: { message }
});

export const resetToastMessage = () => ({
    type: RESET_TOAST,
});