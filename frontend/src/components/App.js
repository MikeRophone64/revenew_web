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

    componentDidMount() {
        fetch('/api/hotels?format=json')
        .then(response => response.json())
        .then(data => {
            const hotels = data.map(hotel => {
                console.log(hotel);
                return hotel;
            })
            
            this.setState({
                hotelList: hotels
            });
        });

    }

    render() {

        return (
            <div >  
                <HeaderNav />
                    <Grid 
                        container
                        direction="row"
                        alignItems="stretch"
                        justify="flex-start"
                        spacing={5}
                    >
                        <Sidebar />
                        <Content />
                    </Grid>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));