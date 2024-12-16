import React, { useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
export default function Movies() {
    const [state, setState] = useState({
        movies: []
    });
    return (
        <ul className="movies">
            {state.movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}
