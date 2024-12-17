

import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onAdd, setMovies }) => {
    const [searchLine, setSearchLine] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    };

    const searchBoxSubmitHandler = async (e) => {
        e.preventDefault();
        if (!searchLine) return;

        setLoading(true);
        setError('');
        setMovies([]);
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=665e9dcf`);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setError('Heç bir film tapılmadı');
            }
        } catch (err) {
            setError('Filmləri əldə etmək mümkün olmadı');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    <h4>Искать фильм по названию:</h4>
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button className='search' type="submit" disabled={!searchLine || loading}>
                    Искать
                </button>
            </form>
            {loading && <p>Yüklənir...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default SearchBox;