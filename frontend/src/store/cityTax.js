import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';


const slice = createSlice({
    name: 'Tax',
    initialState: {
        DisneyHotels: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        taxUpdated: (tax, action) => {
            tax.DisneyHotels = action.payload;
        }
    }
});

export const { taxUpdated } = slice.actions
export default slice.reducer

const url = "api/tax/"
export const loadCityTax = (date) => apiCallBegan({
    url: url + date,
    onSuccess: taxUpdated.type
});