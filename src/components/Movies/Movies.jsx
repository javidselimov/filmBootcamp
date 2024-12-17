
import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ({ movies, onAdd }) => {
    return (
        <ul className="movies">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem
                            title={movie.Title || movie.title}
                            year={movie.Year || movie.year}
                            poster={movie.Poster || movie.poster}
                            imdbID={movie.imdbID}
                            onAdd={onAdd}
                        />
                    </li>
                ))
            ) : (
                <p>No movies to display</p>
            )}
        </ul>
    );
};

export default Movies;