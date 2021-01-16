import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'selectedHotel',
    initialState: {  selectedHotel: 'DLH' },
    reducers: {
        hotelChanged: (state, action) => {
            state.selectedHotel = action.payload.selectedHotel;
        }
    }
});

export const { hotelChanged } = slice.actions
export default slice.reducer 