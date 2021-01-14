import {FETCH_OFFERS} from "../../actions/action-types";
import {fetchOffers, updateOffers} from "../../actions"
import {IOfferData} from "../../common/types";
import {OfferRecord} from "../../records/offer";
const fs = require('fs');
const path = require("path");

describe("Toast actions", () => {

    let offersInfo : { offers: IOfferData[]};

    beforeEach((done) => {
        const filePath = path.resolve(__dirname, "../test.json");
        fs.readFile(filePath, 'utf8', function (err: Error | null, data: any) {
            offersInfo = JSON.parse(data);
            done();
        });
    });

    it("should return a valid show toast message payload", () => {
        const body = fetchOffers();
        expect(body.type).toEqual(FETCH_OFFERS.START);
    });

    it("should return a valid reset toast message payload", () => {
        const offerData: IOfferData = offersInfo.offers[0];
        const offerRecord = new OfferRecord(offerData);
        const body = updateOffers([offerRecord]);
        expect(body.payload.length).toEqual(1);
    });
});