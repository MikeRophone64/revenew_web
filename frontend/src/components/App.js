import React, { Component } from 'react';
import { render } from 'react-dom';
import MainInterface from "./MainInterface"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderNav from './HeaderNav';

class App extends Component {

    render() {

        return (
            <Container fixed disableGutters={true}>
                <HeaderNav />
                <MainInterface/>
            </Container>
        )
    }
}

render(<App/>, document.getElementById('app'));