import React, { useState, useContext, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { hotelChanged } from '../store/hotels';
import { useDispatch, useSelector } from 'react-redux';

export default function HotelCard(props) {
  const dispatch = useDispatch();

  const handleClick = (hotel) => {
    dispatch(hotelChanged({ selectedHotel: hotel }))
  }

  return (
    <Grid item lg={4} md={6} xs={12}>
      <Card 
        onClick={() => handleClick(props.hotel.abbrev)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100px"
            image={props.hotel.image}
            title={props.hotel.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {props.hotel.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Keys: {props.hotel.stars}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}