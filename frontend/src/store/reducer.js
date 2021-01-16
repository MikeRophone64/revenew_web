import { combineReducers } from 'redux';
import selectorsReducer from './selectors';

export default combineReducers({
    selectors: selectorsReducer
})