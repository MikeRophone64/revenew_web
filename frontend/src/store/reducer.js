import * as actions from './actionsTypes';

export default function reducer(state = [], action) {
    if(action.type === actions.currencyChanged) {
        return {...state, selectedCurrency: action.payload.selectedCurrency}
    } else {
        return state;
    }
}