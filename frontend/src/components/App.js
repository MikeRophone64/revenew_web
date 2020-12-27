import React, { Component } from 'react';
import { render } from 'react-dom';

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
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <Content />
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));