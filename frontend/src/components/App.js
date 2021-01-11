import React, { Component } from 'react';
import { render } from 'react-dom';
import { CalculationProvider } from './CalcContext';

import MainInterface from "./MainInterface"
import Container from '@material-ui/core/Container';
import HeaderNav from './HeaderNav';

function App() {
    return (
        <CalculationProvider>
            <Container fixed disableGutters={true}>
                <HeaderNav />
                <MainInterface/>
            </Container>
        </CalculationProvider>
    )
}

render(<App/>, document.getElementById('app'));