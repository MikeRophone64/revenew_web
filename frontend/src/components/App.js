import React, { Component } from 'react';
import { render } from 'react-dom';
import StoreContext from '../contexts/storeContexts';

import MainInterface from "./MainInterface"
import Container from '@material-ui/core/Container';
import HeaderNav from './HeaderNav';
import configureStore from '../store/configureStore';

const store = configureStore()

function App() {
    return (
        <StoreContext.Provider value={store}>
            <Container fixed disableGutters={true}>
                <HeaderNav />
                <MainInterface/>
            </Container>
        </StoreContext.Provider>
    )
}

render(<App/>, document.getElementById('app'));