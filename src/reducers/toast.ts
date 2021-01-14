import {SHOW_TOAST, RESET_TOAST} from "../actions/action-types";
import {IAction} from "../common/types";

export interface IToastState {
    message: string;
}

const initialState: IToastState = {
    message: '',
};

export const toast = (state: IToastState = initialState, action: IAction) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                message: action.payload.message
            };

        case RESET_TOAST:
            return {
                message: ''
            };

        default:
            return state;
    }
};
