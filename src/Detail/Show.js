import React, { Component } from 'react';

const Show = (props) => {
    console.log(props);
    return (
        <div>
            <img className="detailPosterImage" src={props.Poster} />
            <h1>{props.Title}</h1>
            <p>{props.Year}</p>
            <p>{props.Plot}</p>

        </div>
    );
}
export default Show;
