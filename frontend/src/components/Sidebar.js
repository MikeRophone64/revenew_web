import React, { Component, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MyDate from './datepicker';
import { Container, Typography } from '@material-ui/core';
import { useSelectedHotel, useSelectedCurrency } from './CalcContext';


export default function Sidebar() {
    const selectedHotel = useSelectedHotel()
    const selectedCurrency = useSelectedCurrency()

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
    
    return (
        <>
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
        </Container>
        <Container>
            <br />
            <Divider />
            <Typography>
                Hotel: {selectedHotel}
            </Typography>
            <Typography>
                Currency: {selectedCurrency}
            </Typography>
        </Container>
        </>
    )
}