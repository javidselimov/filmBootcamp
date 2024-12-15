import React from 'react';
import './MovieItem.css';

const MovieItem = ({ title, year, poster, imdbID, onAddToFavorites }) => {
  const handleAddToFavorites = () => {
    onAddToFavorites({ title, year, imdbID, poster });
  };

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={poster} alt={title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {title} ({year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={handleAddToFavorites}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
