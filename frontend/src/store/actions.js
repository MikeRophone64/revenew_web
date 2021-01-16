import * as actions from '../store/actionsTypes';

export const currencyChanged = currency => ({
    type: actions.currencyChanged,
          payload: {
            selectedCurrency: currency
        }
})