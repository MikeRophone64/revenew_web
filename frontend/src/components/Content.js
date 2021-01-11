import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HotelCard from './HotelCard';
import { Container } from '@material-ui/core';
import { useHotels, useUpdateHotels } from './CalcContext';

export default function Content() {
    const hotels = useHotels()
    const click = useUpdateHotels()
    

    return (
        <Grid 
            container 
            spacing={3} 
            alignItems="stretch">
                {hotels.map((hotel, i) => (
                    <HotelCard hotel={hotel} handleClick={click}/>
                ))
                }
        </Grid>
    )
}