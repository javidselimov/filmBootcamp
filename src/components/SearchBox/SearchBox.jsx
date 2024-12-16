import { useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../movies/movie";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchLineChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(search));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={search}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!search}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
