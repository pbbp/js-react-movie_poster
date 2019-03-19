import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import Show from './Show';
import '../styles/Detail.css';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            show: {}
        };

    }

    componentDidMount() {
        const showId = this.props.match.params.id;

        fetch("http://www.omdbapi.com/?i=" + showId + "&apikey=2ec014c3")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        show: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, item } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="detailsView">
                    <span><Link to="/">&lt;&lt;&lt; Back to Shows List</Link></span>
                    <Show {...this.state.show} />
                </div>
            );
        }
    }
}

export default Detail;
