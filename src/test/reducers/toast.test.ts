import {IToastState, toast} from "../../reducers/toast";
import {resetToastMessage, showToastMessage} from "../../actions";
import {IAction} from "../../common/types";

describe("Toast reducer", () => {

    let state: IToastState = {message: "Test message"};

    it("should update toast message with new value", () => {
        const newMessage = "Updated message";
        const action: IAction = showToastMessage(newMessage);
        const newState: IToastState = toast(state, action);
        expect(newState.message).toBe(newMessage);
    });

    it("should reset toast message", () => {
        const action: IAction = resetToastMessage();
        const newState: IToastState = toast(state, action);
        expect(newState.message).toBe("");
    });
});