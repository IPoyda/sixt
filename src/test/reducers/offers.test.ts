import {IOffersState, offers} from "../../reducers/offers";
import {fetchOffers, updateOffers} from "../../actions"
import {IAction} from "../../common/types";
const fs = require('fs');
const path = require("path");

describe("Offers reducer", () => {

    let state: IOffersState = {list: [], isFetching: false};

    beforeEach((done) => {
        const filePath = path.resolve(__dirname, "../test.json");
        fs.readFile(filePath, 'utf8', function (err: Error | null, data: any) {
            const offersInfo = JSON.parse(data);
            state.list = offersInfo?.offers || [];
            done();
        });
    });

    it("length of offers should be greater then 0", () => {
        const action: IAction = fetchOffers();
        const newState: IOffersState = offers(state, action);
        expect(newState.list.length).toBe(3);
    });

    it("length of offers should be equals then 0", () => {
        const action: IAction = updateOffers([]);
        const newState: IOffersState = offers(state, action);
        expect(newState.list.length).toBe(0);
    });
});