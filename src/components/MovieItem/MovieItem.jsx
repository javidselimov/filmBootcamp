/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToList } from "../../movies/list";
import "./MovieItem.css";

const MovieItem = ({ Title, Year, Poster, imdbID }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToList(imdbID));
  };

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title} ({Year})
        </h3>
        <button
          onClick={handleClick}
          type="button"
          className="movie-item__add-button"
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
