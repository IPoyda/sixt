import React from "react";
import { render, screen } from "@testing-library/react";
import Offer from "../../components/Offer";
import {IOfferData} from "../../common/types";
import {OfferRecord} from "../../records/offer";
const fs = require('fs');
const path = require("path");

describe("Offer", () => {
    let offersInfo : { offers: IOfferData[]};

    beforeEach((done) => {
        const filePath = path.resolve(__dirname, "../test.json");
        fs.readFile(filePath, 'utf8', function (err: Error | null, data: any) {
            offersInfo = JSON.parse(data);
            done();
        });
    });

    it("renders Toast component", () => {
        const offer = new OfferRecord(offersInfo.offers[0]);
        render(<Offer offer={offer} />);
        expect(screen.getByAltText('car preview')).toBeInTheDocument();
        expect(screen.queryByText(offer.name)).toBeInTheDocument();
        expect(screen.queryByText(`€${offer.price.display}`)).toBeInTheDocument();
    });
});