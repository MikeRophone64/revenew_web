import { combineReducers } from 'redux';
import taxReducer from './cityTax';

export default combineReducers({
    cityTax: taxReducer
})