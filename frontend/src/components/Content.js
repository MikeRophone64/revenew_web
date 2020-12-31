import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HotelCard from './HotelCard';
import { eachHourOfIntervalWithOptions } from 'date-fns/fp';

// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelList: []
        }
    }

    componentDidMount() {
        fetch('/api/hotels?format=json')
        .then(response => response.json())
        .then(data => {
            const hotels = data.map(item => {
                return item
            })
            console.log(hotels)

            this.setState({
                hotelList: hotels
            });
        });
    }

    render() {
        return (
            <Grid item xs={9} >
                <Grid 
                    container
                    spacing={5}
                >
                    <HotelCard disneyHotels={this.state.hotelList}/>
                </Grid>
            </Grid>
        )
    }
}