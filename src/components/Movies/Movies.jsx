import React, { Component, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useSelector } from 'react-redux';

const Movies = () => {
    const movies = useSelector((state) => state.movies.value);

    return (
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}

export default Movies;