import {offers} from './offers';
import {toast} from './toast';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    offers: offers,
    toast: toast,
});
