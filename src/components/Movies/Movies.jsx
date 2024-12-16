import { useContext } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { Results } from "../../store/ContextApi";

export default function Movies() {
  const { results, setResults } = useContext(Results);
  return (
    <ul className="movies">
      {results.map((movie) => (
        <li key={movie.imdbID} className="movies__item">
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}
