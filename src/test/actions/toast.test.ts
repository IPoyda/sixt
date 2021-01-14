import {SHOW_TOAST, RESET_TOAST} from "../../actions/action-types";
import {resetToastMessage, showToastMessage} from "../../actions"

describe("Toast actions", () => {

    it("should return a valid show toast message payload", () => {
        const message = "Test message";
        const body = showToastMessage(message);
        expect(body.payload.message).toEqual(message);
        expect(body.type).toEqual(SHOW_TOAST);
    });

    it("should return a valid reset toast message payload", () => {
        const body = resetToastMessage();
        expect(body.type).toEqual(RESET_TOAST);
    });
});