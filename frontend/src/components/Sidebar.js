import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item" >Hello</li>
                        <li className="nav-item" >World</li>
                        <li className="nav-item" >HIHIHI</li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}