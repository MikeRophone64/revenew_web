import React, { Component, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MyDate from './datepicker';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "Hello"};
        this.changeText = this.changeText.bind(this);
    }

    changeText() {
        const myText = this.state.text == "Hello" ? "Bye" : "Hello";
        this.setState({ text: myText });
    }

    checkPartyMix() {
        const adults = document.getElementById("num_adults");
        const teens = document.getElementById("num_teens");
        const children = document.getElementById("num_children");

        // Check adults
        if (adults.value > 6) {
            adults.value = 6;
        } else if (adults.value < 0) {
            adults.value = 0;
        }

        // Check teens
        if (teens.value > 6) {
            teens.value = 6;
        } else if (teens.value < 0) {
            teens.value = 0;
        }

        // Check children
        if (children.value > 6) {
            children.value = 6;
        } else if (children.value < 0) {
            children.value = 0;
        }


    }
    
    render() {

        return (
            <Grid item xs={3}>
                <div className="sidebar sidebar-sticky">
                    <div>
                        <MyDate />
                        <TextField
                            onChange={this.checkPartyMix}
                            id="num_adults"
                            label="Adults"
                            type="number"
                            // Add Mix Max later (messes with CSS)
                            // InputProps={{ 
                            //     inputProps: {
                            //         min:0,
                            //         max:6
                            //     }
                            // }}
                            defaultValue="1"
                        />
                        <TextField
                            onChange={this.checkPartyMix}
                            id="num_teens"
                            label="Teens"
                            type="number"
                        />
                        <TextField
                            onChange={this.checkPartyMix}
                            id="num_children"
                            label="Children"
                            type="number"
                        />
                        <TextField
                            id="room_price"
                            label="Room Price"
                            type="number"
                        />
                    </div>
                </div>
            </Grid>
            
        )
    }
}