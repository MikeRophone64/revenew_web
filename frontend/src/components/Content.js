import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid item xs={9}>
                <h1>CONTENT GOES HERE</h1>
            </Grid>
        )
    }
}