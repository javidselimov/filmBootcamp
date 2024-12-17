import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBox.css";
const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchLine, setsearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setsearchLine(e.target.value);
  };
  //

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=eba96b27`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "FETCH_MOVIE",
          payload: data.Search,
        })
      );
    setsearchLine("");
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
