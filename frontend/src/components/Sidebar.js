import React, { useContext, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MyDate from './datepicker';
import { Container, Divider, Typography } from '@material-ui/core';
import { loadCityTax } from '../store/cityTax';
import { useSelector } from 'react-redux';


export default function Sidebar() {

    const hotel = useSelector(state => state.selectors.hotels.selectedHotel);
    const currency = useSelector(state => state.selectors.currency.selectedCurrency);
    const rate = useSelector(state => state.rates.Tax.DisneyHotels)
    useEffect(() => {
    });

    const checkPartyMix = () => {
        const adults = document.getElementById("num_adults");
        const teens = document.getElementById("num_teens");
        const children = document.getElementById("num_children");
        const price = document.getElementById("room_price");

        // Check adults
        adults.value = adults.value > 6 ? 6 : adults.value;
        adults.value = adults.value < 0 ? 0 : adults.value;

        // Check teens
        teens.value = teens.value > 6 ? 6 : teens.value;
        teens.value = teens.value < 0 ? 0 : teens.value;

        // Check children
        children.value = children.value > 6 ? 6 : children.value;
        children.value = children.value < 0 ? 0 : children.value;

        // Check Price
        price.value = price.value < 0 ? 0 : price.value;

    }

    // store.dispatch(loadCityTax);

    return (
        <Container>
            <MyDate className="button-no-focus"/>
            <TextField
                onChange={checkPartyMix}
                id="num_adults"
                label="Adults"
                type="number"
                defaultValue="1"
            />
            <TextField
                onChange={checkPartyMix}
                id="num_teens"
                label="Teens"
                type="number"
            />
            <TextField
                onChange={checkPartyMix}
                id="num_children"
                label="Children"
                type="number"
            />
            <TextField
                onChange={checkPartyMix}
                id="room_price"
                label="Room Price"
                type="number"
            />
            <Typography>
                Hotel: {hotel}
            </Typography>
            <Typography>
                Currency: {currency}
            </Typography>
            <Divider variant="middle"/>
            <Typography>
                PRICE: {rate.map(item => item.EUR)}
            </Typography>


        </Container>
    )
}