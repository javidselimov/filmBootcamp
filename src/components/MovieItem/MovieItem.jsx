import { useContext } from "react";
import "./MovieItem.css";
import { Lists, SavedId } from "../../store/ContextApi";

export default function MovieItem({ Title, Year, Poster, imdbID }) {
  const { lists, setLists } = useContext(Lists);
  const { savedId, setSavedId } = useContext(SavedId);
  const handleAddToList = () => {
    setLists((prevLists) => {
      const newLists = [...prevLists];
      if (!newLists.some((movie) => movie.imdbID === imdbID)) {
        newLists.push({ imdbID, Title, Year });
      }
      return newLists;
    });
  };
  return (
    <article key={imdbID} className="movie-item">
      <img
        className="movie-item__poster"
        src={Poster ? Poster : ""}
        alt={Title}
      />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={handleAddToList}
          disabled={savedId?true:false}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}
