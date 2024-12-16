import React, { useState, useContext } from "react";
import "./Favorites.css";
import { Lists, SavedId } from "../../store/ContextApi";
import { NavLink } from "react-router-dom";
export default function Favorites() {
  const { lists, setLists } = useContext(Lists);
  const { savedId, setSavedId } = useContext(SavedId);
  const [title, setTitle] = useState("Новый список");
  const handleRemoveMovie = (imdbID) => {
    setLists((prevLists) =>
      prevLists.filter((movie) => movie.imdbID !== imdbID)
    );
  };
  const handleSaveList = async () => {
    try {
      const response = await fetch(
        "https://acb-api.algoritmika.org/api/movies/list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            movies: lists.map((movie) => movie.imdbID),
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Could not save list.");
      }
      const data = await response.json();
      setSavedId(data.id);
    } catch (error) {
      console.error(error);
    }
  };
  const resetList = () => {
    setTitle("Новый список");
    setSavedId(null);
    setLists([]);
  };
  return (
    <div className="favorites">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="favorites__name"
        placeholder="Название списка"
        disabled={savedId ? true : false}
      />
      <ul className="favorites__list">
        {lists.map((item) => (
          <div className="flex">
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
            </li>
              <button
                className="favorites__remove"
                onClick={() => handleRemoveMovie(item.imdbID)}
                disabled={savedId ? true : false}
              >
                Удалить
              </button>
          </div>
        ))}
      </ul>
      {savedId ? (
        ""
      ) : (
        <button
          type="button"
          className="favorites__save"
          onClick={handleSaveList}
          disabled={title == "Новый список" || !title || lists.length === 0}
        >
          Сохранить список
        </button>
      )}

      {savedId && (
        <>
          <NavLink
            to={`/list/${savedId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="favorites__link"
          >
            Просмотреть список
          </NavLink>
          <button
            type="button"
            className="favorites__reset"
            onClick={resetList}
          >
            Создать новый список
          </button>
        </>
      )}
    </div>
  );
}
