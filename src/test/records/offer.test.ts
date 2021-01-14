import {OfferRecord} from "../../records/offer";
import {IOfferData} from "../../common/types";
import {BASE_URL} from "../../constants";
const fs = require('fs');
const path = require("path");

describe("Offer record", () => {

    let offersInfo : { offers: IOfferData[]};

    beforeEach((done) => {
        const filePath = path.resolve(__dirname, "../test.json");
        fs.readFile(filePath, 'utf8', function (err: Error | null, data: any) {
            offersInfo = JSON.parse(data);
            done();
        });
    });

    it("should create a valid offer record", () => {
        const updatePath = (path = "") => `${BASE_URL}${(path).split("//").pop()}`;
        const offerData: IOfferData = offersInfo.offers[0];
        const offerRecord = new OfferRecord(offerData);
        expect(offerRecord.id).toEqual(offerData.id);
        expect(offerRecord.name).toEqual(offerData.headlines.description);

        expect(offerRecord.price.display).toEqual(offerData.prices.totalPrice.amount.display);
        expect(offerRecord.price.currency).toEqual(offerData.prices.totalPrice.amount.currency);
        expect(offerRecord.price.value).toEqual(offerData.prices.totalPrice.amount.value);

        expect(offerRecord.images.small).toEqual(updatePath(offerData.images.small));
        expect(offerRecord.images.medium).toEqual(updatePath(offerData.images.medium));
        expect(offerRecord.images.large).toEqual(updatePath(offerData.images.large));
    });
});