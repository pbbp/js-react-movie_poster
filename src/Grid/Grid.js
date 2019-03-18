import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import data from './data.json';

import Poster from './Poster';
import '../styles/Grid.css';

class Grid extends Component {
    render() {
        return (
            <div>
                {data.shows.map(show => <Poster {...show} />)}
            </div>
        )
    }
}

export default Grid;
