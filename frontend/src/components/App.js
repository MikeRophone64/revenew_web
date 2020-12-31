import React, { Component } from 'react';
import { render } from 'react-dom';
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
            <Grid>
                <HeaderNav />
                <Grid 
                    container
                    direction="row"
                    alignItems="stretch"
                    justify="flex-start"
                    spacing={3}
                    className="content"
                >
                    <Sidebar />
                    <Content />
                </Grid>
            </Grid>
        )
    }
}

render(<App/>, document.getElementById('app'));