import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainInterface from "./MainInterface"
import Container from '@material-ui/core/Container';
import HeaderNav from './HeaderNav';
import configureStore from '../store/configureStore';

const store = configureStore()

function App() {
    return (
        <Provider store={store}>
            <Container fixed disableGutters={true}>
                <HeaderNav />
                <MainInterface/>
            </Container>
        </Provider>
    )
}

render(<App/>, document.getElementById('app'));