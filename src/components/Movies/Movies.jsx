import React, { memo } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ({ movies, onAddToFavorites }) => (
  <>
    {movies.length ? (
      <ul className="movies">
        {movies.map(({ Title, Year, Poster, imdbID }) => (
          <li className="movies__item" key={imdbID}>
            <MovieItem
              title={Title}
              year={Year}
              poster={Poster}
              imdbID={imdbID}
              onAddToFavorites={onAddToFavorites}
            />
          </li>
        ))}
      </ul>
    ) : (
      <div className="movies__no-results">Нет фильмов для отображения</div>
    )}
  </>
);

export default memo(Movies);
