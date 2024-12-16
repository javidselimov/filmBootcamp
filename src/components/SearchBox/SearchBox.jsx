import { useContext, useState } from "react";
import "./SearchBox.css";
import { Results } from "../../store/ContextApi";

export default function SearchBox() {
  const [searchLine, setSearchLine] = useState("");
  const { results, setResults } = useContext(Results);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = async (e) => {
    e.preventDefault();
    if (!searchLine.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchLine}&apikey=73c0f3`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      if (data.Response === "False") throw new Error(data.Error);
      setResults(data.Search || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
            placeholder="Поиск фильма..."
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
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
