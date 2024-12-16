<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ({ onAddToFavorites }) => {
    const [movies] = useState([
        {
            imdbID: 'tt3896198',
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        },
        {
            imdbID: 'tt0068646',
            title: "The Godfather",
            year: 1972,
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }
    ]);

    return (
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} onAddToFavorites={onAddToFavorites} />
                </li>
            ))}
        </ul>
    );
};

export default Movies;
>>>>>>> 5aaa1fab40d24dd35e8b454a0e12857b36ace822
