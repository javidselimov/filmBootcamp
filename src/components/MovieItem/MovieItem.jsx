import React, { Component } from 'react';
import './MovieItem.css';
import { useDispatch } from 'react-redux';
import { saveMovie } from '../../app/favorites/favoritesSlice';

const MovieItem = ({ Title, Year, Poster, imdbID }) => {

    const dispatch = useDispatch();
    
    const saveToFavorites = () => {
        const action = {
            imdbID: imdbID,
            Title: Title,
            Year: Year,
            Poster: Poster
        }
        dispatch(saveMovie(action));
        console.log(action)
    }
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={() => saveToFavorites()}>Добавить в список</button>
            </div>
        </article>
    );
}

export default MovieItem;