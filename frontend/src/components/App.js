import React, { Component } from 'react';
import { render } from 'react-dom';
import MainInterface from "./MainInterface"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelList: []
        };
    }


    render() {

        return (
            <Container fixed disableGutters={true}>
                <HeaderNav />
                <MainInterface />
            </Container>
        )
    }
}

render(<App/>, document.getElementById('app'));