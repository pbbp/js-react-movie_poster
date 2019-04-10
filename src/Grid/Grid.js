import React, { Component } from 'react';

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

            shows = data.shows.filter((show) => {
                return show.title.toLowerCase().includes(input.toLowerCase())
            })

            this.setState({ shows: shows });

        } else {
            this.setState({ shows: data.shows });

        }
    }

    render() {
        return (
            <div className="gridView">
                <input className="search" type="text" placeholder="Search Show" onChange={this.handleChange} />
                <div className="billboard">
                    {this.state.shows.map(show =>
                        // <Link to={`${match.url}/shows/` + show.imdbID}>
                        <Poster {...show} key={show.title.replace(" ", "-")} />
                        // </Link>
                    )}
                </div>
            </div >
        )
    }
}

export default Grid;
