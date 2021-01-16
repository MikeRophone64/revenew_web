import { combineReducers } from 'redux';
import currencyReducer from './currency';
import hotelsReducer from './hotels';

export default combineReducers({
    currency: currencyReducer,
    hotels: hotelsReducer
})