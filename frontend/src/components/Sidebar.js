import React, { Component, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import { Button } from '@material-ui/core';
import Test from './texting';


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


    
    render() {

        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item" >Hello</li>
                        <li className="nav-item" >World</li>
                        <li className="nav-item" ><AccessAlarmOutlinedIcon /></li>
                        <li className="nav-item" onClick={this.changeText}>{this.state.text}</li>
                        <Button onClick={this.changeText}>
                            {this.state.text}
                        </Button>
                        <Test />

                    </ul>
                </div>
            </nav>
            
        )
    }
}