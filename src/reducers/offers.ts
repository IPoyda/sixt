import {FETCH_OFFERS} from "../actions/action-types";
import {IAction} from "../common/types";
import {OfferRecord} from "../records/offer";

export interface IOffersState {
    list: OfferRecord[];
    isFetching: boolean;
}

const initialState: IOffersState = {
    list: [],
    isFetching: false
};

export const offers = (state: IOffersState = initialState, action: IAction) => {
    switch (action.type) {

        case FETCH_OFFERS.START:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_OFFERS.FINISHED:
            return {
                ...state,
                list: [...action.payload],
                isFetching: false
            };

        default:
            return state;
    }
};
