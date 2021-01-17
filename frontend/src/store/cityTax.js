import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'cityTax',
    initialState: {  
        cityTax: [],
        loading: false,
        lastFetch: null
     },
    reducers: {
        taxUpdated: (state, action) => {
            state.cityTax = action.payload.cityTax;
        }
    }
});

export const { taxUpdated } = slice.actions
export default slice.reducer
