import React from 'react';
import './MovieItem.css';

export default function MovieItem({ title, year, poster }) {
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
