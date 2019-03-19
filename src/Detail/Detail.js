import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Detail extends Component {
    componentDidMount() {
        const movie = this.props;

        fetch("http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=2ec014c3")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: {
                            id: movie.imdbID,
                            title: result.Title,
                            year: result.Year,
                            poster: result.Poster
                        }
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
                <div>
                    <span><Link to="/">Back to Shows List</Link></span>
                </div>
            );
        }
    }
}

export default Detail;
