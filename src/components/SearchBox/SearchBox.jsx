import { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
  const [searchLine, setSearchLine] = useState('');
  const handleInputChange = (e) => setSearchLine(e.target.value);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchLine.trim()) return; 
    const apiKey = '23ef1119';
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=${apiKey}`);
      const data = await response.json();
      if (data.Response === 'True') {
        onSearch(data.Search || []); 
      } else {
        console.warn('Ошибка поиска:', data.Error);
        onSearch([]); 
      }
    } catch (error) {
      console.error('Ошибка API:', error);
    }
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={handleSearchSubmit}>
        <label htmlFor="search-input" className="search-box__form-label">
          Искать фильм по названию:
        </label>
        <input
          id="search-input"
          type="text"
          value={searchLine}
          className="search-box__form-input"
          placeholder="Например, Shawshank Redemption"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine.trim()} 
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
