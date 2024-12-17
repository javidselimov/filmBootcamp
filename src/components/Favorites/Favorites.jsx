import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((store) => store.favoriteReducer.movies);
  const title = useSelector((store) => store.favoriteReducer.movieListName);
  const [saveBtn, setsaveBtn] = useState("Сохранить список");
  const [isClicked, setisClicked] = useState(false);
  const deleteFavorite = (movie) => {
    dispatch({
      type: "DELETE_FAVORITE_ITEM",
      payload: movie,
    });
  };
  const createFavoriteList = () => {
    setsaveBtn("loading...");
    setTimeout(() => {
      setisClicked(true);
    }, 300);
  };
  const enabled = title && favoriteMovies.length > 0;

  return (
    <div className="favorites">
      <input
        value={title}
        className="favorites__name"
        onChange={(e) =>
          dispatch({ type: "LIST_NAME", payload: e.target.value })
        }
        placeholder="Новый список"
        disabled={isClicked}
      />
      {favoriteMovies.length > 0 && (
        <ul className="favorites__list">
          {favoriteMovies?.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
                <button
                  onClick={() => deleteFavorite(item)}
                  disabled={isClicked}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {!isClicked ? (
        <button
          type="button"
          onClick={createFavoriteList}
          className="favorites__save"
          disabled={!enabled}
        >
          {saveBtn}
        </button>
      ) : (
        <Link to="/listpage">Перейти к списку</Link>
      )}
    </div>
  );
};

export default Favorites;
