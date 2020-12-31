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
        adults.value = adults.value > 6 ? 6 : adults.value;
        adults.value = adults.value < 0 ? 0 : adults.value;

        // Check teens
        teens.value = teens.value > 6 ? 6 : teens.value;
        teens.value = teens.value < 0 ? 0 : teens.value;

        // Check children
        children.value = children.value > 6 ? 6 : children.value;
        children.value = children.value < 0 ? 0 : children.value;

    }
    
    render() {

        return (
            <Grid 
                item 
                xs={3} 
            >
                    <div>
                        <MyDate />
                        <TextField
                            onChange={this.checkPartyMix}
                            id="num_adults"
                            label="Adults"
                            type="number"
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
            </Grid>
            
        )
    }
}