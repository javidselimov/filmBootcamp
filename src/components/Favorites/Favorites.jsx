import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Favorites.css";
import { Link } from "react-router-dom";
import { addToList } from "../../movies/lists";
import { getList } from "../../movies/lists";
import { clearList, deleteFromList } from "../../redux/slices/listSlice";
import { deleteList } from "../../redux/slices/listsSlice";
import deleteSvg from "../../assets/svg/delete.svg";
import PopUp from "../PopUp/PopUp";

const Favorites = () => {
  const { list, error } = useSelector((state) => state.list);
  const { lists } = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const [inputTitle, setInputTitle] = useState("Новый список");
  const [popUp, setPopUp] = useState(false);
  const [err, setErr] = useState("");
  const [isMovie, setIsMovie] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleSave = () => {
    setErr("");

    if (!inputTitle.trim()) {
      setErr("Title cannot be empty.");
      return;
    }

    if (list.movies.length === 0) {
      setErr("The list must contain at least one movie.");
      return;
    }

    const isDuplicateMovies = lists.some((existingList) => {
      const sameMovies =
        existingList.movies.length === list.movies.length &&
        existingList.movies.every((movieId) =>
          list.movies.map((m) => m.imdbID).includes(movieId)
        );
      return sameMovies;
    });

    if (isDuplicateMovies) {
      setErr("A list with the same movies already exists.");
      return;
    }

    const isDuplicateTitle = lists.some(
      (existingList) => existingList.title === inputTitle.trim()
    );

    if (isDuplicateTitle) {
      setErr("A list with the same title already exists.");
      return;
    }

    const updatedList = {
      title: inputTitle.trim(),
      movies: list.movies.map((movie) => movie.imdbID),
    };

    dispatch(addToList(updatedList)).then((response) => {
      if (response.payload && response.payload.id) {
        dispatch(getList(response.payload.id));
      }
    });

    dispatch(clearList());
    setInputTitle("Новый список");
  };

  useEffect(() => {
    setErr("");
  }, [list]);

  const openMovieDeletePopup = (movieId) => {
    setDeleteTarget(() => () => dispatch(deleteFromList({ imdbID: movieId })));
    setIsMovie(true);
    setPopUp(true);
  };

  const openListDeletePopup = (id) => {
    setDeleteTarget(() => () => dispatch(deleteList(id)));
    setIsMovie(false);
    setPopUp(true);
  };

  return (
    <div className="favorites">
      <input
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        placeholder="Новый список"
        className="favorites__name"
      />
      {err && <p className="err">{err}</p>}

      <ul className="favorites__list">
        {list.movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <button
              className="delete__button"
              onClick={() => openMovieDeletePopup(movie.imdbID)}
            >
              <img src={deleteSvg} alt="delete" />
            </button>
          </li>
        ))}
      </ul>
      {error && <p className="err">{error}</p>}
      <button type="button" className="favorites__save" onClick={handleSave}>
        Сохранить список
      </button>
      <br />
      {lists.map((listItem) => (
        <div className="list" key={listItem.id}>
          <Link to={`/list/${listItem.id}`} key={listItem.id}>
            {listItem.title}
          </Link>
          <button
            className="delete__button"
            onClick={() => openListDeletePopup(listItem.id)}
          >
            <img src={deleteSvg} alt="delete" />
          </button>
        </div>
      ))}
      {popUp && (
        <PopUp
          setPopUp={setPopUp}
          isMovie={isMovie}
          confirmDelete={deleteTarget}
        />
      )}
    </div>
  );
};

export default Favorites;
