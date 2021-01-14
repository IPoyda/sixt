import {FETCH_OFFERS} from "./action-types"
import {OfferRecord} from "../records/offer";

export const fetchOffers = () => ({
    type: FETCH_OFFERS.START,
});

export const updateOffers = (offers: OfferRecord[]) => {
    return {
        type: FETCH_OFFERS.FINISHED,
        payload: offers
    }
};
