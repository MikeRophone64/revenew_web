import React, { Component } from 'react';
import { render } from 'react-dom';

import MainInterface from "./MainInterface"
import Container from '@material-ui/core/Container';
import HeaderNav from './HeaderNav';

function App() {
    return (
        <Container fixed disableGutters={true}>
            <HeaderNav />
            <MainInterface/>
        </Container>
    )
}

render(<App/>, document.getElementById('app'));