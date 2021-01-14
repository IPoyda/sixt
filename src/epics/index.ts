import {combineEpics} from 'redux-observable';
import {fetchOffers} from './offers';

export const rootEpic = combineEpics(
    fetchOffers
);
