import React, { Component } from 'react';

class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

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
                <a className="poster" href={"shows/" + item.id} >
                    <img className="posterImage" src={item.poster} alt="" />
                    <p>{item.title}</p>
                    <p>{item.year}</p>
                </a >
            );
        }
    }
}

export default Poster;
