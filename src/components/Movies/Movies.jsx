import React, { Component, useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../features/moviesSlice';

export default function Movies() {
    const [state, setState] = useState({
        movies: []
    })
    const movies = useSelector((state) => state.movies.movies);
    // const dispatch = useDispatch();

        // useEffect(() => {
        //     dispatch(setMovies());
        // }, [dispatch]);

  return (
    <ul className="movies">
        {state.movies.map((movie) => (
            <li className="movies__item" key={movie.imdbID}>
                <MovieItem {...movie} />
            </li>
        ))}
    </ul>
  )
}