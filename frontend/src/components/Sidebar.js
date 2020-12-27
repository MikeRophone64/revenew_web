import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id="sidebar">
                <ul className="list-unstyled components mb-5">
                    <li>Hello</li>
                    <li>World</li>
                    <li>HIHIHI</li>
                </ul>
            </nav>
            
        )
    }
}