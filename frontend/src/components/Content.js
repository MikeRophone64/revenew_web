import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HotelCard from './HotelCard';
import { eachHourOfIntervalWithOptions } from 'date-fns/fp';
import { Container } from '@material-ui/core';

// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d_hotelList: []
        }
    }

    componentDidMount() {
        fetch('/api/hotels?format=json')
        .then(response => response.json())
        .then(data => {
            const disney_hotels = data.map(item => {
                return item
            })
            console.log(disney_hotels)

            this.setState({
                d_hotelList: disney_hotels,
                hotelList: "Hotel"
            });
        });
    }

    handleTax = hotel => {
        return alert(`You clicked ${hotel}.`);
    }

    render() {
        return (
            <Grid 
                container 
                spacing={3} 
                alignItems="stretch">
                    {this.state.d_hotelList.map((hotel, i) => (
                        <HotelCard hotel={hotel} handleClick={this.handleTax}/>
                    ))
                    }
            </Grid>
        )
    }
}