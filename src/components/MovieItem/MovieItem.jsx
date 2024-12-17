import React from "react";
import { useDispatch } from "react-redux";
import "./MovieItem.css";

const MovieItem = ({ Title, Year, Poster, imdbID }) => {
  if (Poster === "N/A") {
    Poster =
      "https://scontent.fgyd8-1.fna.fbcdn.net/v/t1.6435-9/128851635_5427040923980029_649285277980215436_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_ylmF0Ob5A0AX9Bf5-F&_nc_ht=scontent.fgyd8-1.fna&oh=00_AfA8P7zs77hMRsjbeqY2rhECJawKOO5Z-CuOwxEj18XbkQ&oe=64294145";
  }
  const dispatch = useDispatch();
  const addToFavorites = () => {
    dispatch({
      type: "ADD_FAVORITES",
      payload: { Title, Year, imdbID },
    });
  };
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={addToFavorites}
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
