import React from 'react';
import './MovieItem.css';

<<<<<<< HEAD
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
=======
const MovieItem = ({ title, year, poster, onAddToFavorites }) => {
    const handleAddToFavorites = () => {
        onAddToFavorites({ title, year, imdbID: title.replace(/\s+/g, '') });
    };

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={poster} alt={title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{title} ({year})</h3>
                <button type="button" className="movie-item__add-button" onClick={handleAddToFavorites}>
                    Добавить в список
                </button>
            </div>
        </article>
    );
};

export default MovieItem;
>>>>>>> 5aaa1fab40d24dd35e8b454a0e12857b36ace822
