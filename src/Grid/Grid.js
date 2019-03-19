import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import data from './data.json';

import Poster from './Poster';
import '../styles/Grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: data.shows
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let input = event.target.value;
        let shows;

        if (input) {

            shows = this.state.shows.filter((show) => {
                console.log(
                    show.title,
                    show.title.toLowerCase().includes(input.toLowerCase())
                );

                return show.title.toLowerCase().includes(input.toLowerCase())
            })

            this.setState({ shows: shows });

        } else {
            this.setState({ shows: data.shows });

        }

        console.log(this.state.shows);
    }

    render() {
        return (
            <div>
                <input className="search" type="text" placeholder="Search Show" onChange={this.handleChange} />
                <div className="billboard">
                    {this.state.shows.map(show =>
                        // <Link to={`${match.url}/shows/` + show.imdbID}>
                        <Poster {...show} />
                        // </Link>
                    )}
                </div>
            </div >
        )
    }
}

export default Grid;
