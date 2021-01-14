import {ofType} from 'redux-observable';
import {FETCH_OFFERS} from "../actions/action-types"
import {mergeMap, catchError} from 'rxjs/operators';
import {updateOffers, showToastMessage} from '../actions';
import {OfferRecord} from "../records/offer";
import {IOfferData} from "../common/types";
import {of} from "rxjs";

export const fetchOffers = (action$: any) => action$.pipe(
    ofType(FETCH_OFFERS.START),
    mergeMap(async (action) => {
        const url = 'http://cdn.sixt.io/codingtask/offers.json';
        const offersInfo = await fetch(url).then(res => res.json());
        const offers = (offersInfo.offers || []).map((offer: IOfferData) => new OfferRecord(offer));
        return Object.assign({}, action, updateOffers(offers));
    }),
    catchError(error => of(
        showToastMessage('Error: Unable to fetch offers'),
        updateOffers([])
    ))
);
