import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'selectedCurrency',
    initialState: {  selectedCurrency: 'EUR' },
    reducers: {
        currencyChanged: (state, action) => {
            state.selectedCurrency = action.payload.selectedCurrency;
        }
    }
});

export const { currencyChanged } = slice.actions
export default slice.reducer
