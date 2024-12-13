import React, { Component } from 'react';
import './MovieItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveMovie } from '../../app/favorites/favoritesSlice';

const MovieItem = ({ Title, Year, Poster, imdbID }) => {

    const dispatch = useDispatch();
    const favoritesState = useSelector(state=>state.favorites);
    
    const saveToFavorites = () => {
        const movie = {
            imdbID: imdbID,
            Title: Title,
            Year: Year,
            Poster: Poster
        }

        const isContained = favoritesState.movies.find((movie) => movie.imdbID === imdbID);

        if(!isContained){
            dispatch(saveMovie(movie));
        }

        
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