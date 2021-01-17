import { combineReducers } from 'redux';
import selectorsReducer from './selectors';
import ratesReducer from './rates';

export default combineReducers({
    selectors: selectorsReducer,
    rates: ratesReducer
})