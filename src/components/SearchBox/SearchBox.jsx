import { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
  const [searchLine, setSearchLine] = useState('');

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };

  const searchBoxSubmitHandler = async (e) => {
    e.preventDefault();
    const apiKey = '9529d64b';
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchLine}&apikey=${apiKey}`
      );

      const data = await response.json();

      if (data.Response === 'True') {
        onSearch(data.Search || []);  
      } else {
        console.log('Xəta alındı:', data.Error);
      }
    } catch (error) {
      console.error('API sorğusu zamanı xəta:', error);
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
