import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
const Movies = () => {
  const movies = useSelector((store) => store.movieReducer.movies);

  return (
    <ul className="movies">
      {movies &&
        movies?.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} />
          </li>
        ))}
    </ul>
  );
};

export default Movies;
