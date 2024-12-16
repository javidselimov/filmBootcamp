import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useSelector } from "react-redux";

const Movies = () => {
  const { movie } = useSelector((state) => state.movies);
  const movies = movie?.Search || [];
  return (
    <ul className="movies">
      {movies?.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
