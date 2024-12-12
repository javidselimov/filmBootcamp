import React, { Component, useEffect } from 'react';
import './MovieItem.css';
import Favorites from '../Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie } from '../../features/moviesSlice';

export default function MovieItem({ title, year, poster, imdbID }) {
  const list = useSelector((state) => state.movies.favouriteMovies);
  const dispatch = useDispatch();
  
  const addFilm = () => {
    console.log(list);
    const movie = { imdbID, title, year };
    dispatch(addFavoriteMovie(movie));
    console.log(`${title} (${year})`);
  }

  return (
    <article className="movie-item">
        <img className="movie-item__poster" src={poster} alt={title} />
        <div className="movie-item__info">
            <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
            <button onClick={addFilm} type="button" className="movie-item__add-button">Добавить в список</button>
        </div>
    </article>
  )
}