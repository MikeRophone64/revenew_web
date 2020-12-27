import React, { Component } from 'react';
import { render } from 'react-dom';

import Nav from './Nav';
import Sidebar from './Sidebar';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/api/hotels?format=json')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>  
                <Nav />
                <Sidebar />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));