import { useState } from 'react';
import './SearchBox.css';
import { getMovies } from '../../app/movies/movieSlice';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        searchLine: ''
    })

    const searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${state.searchLine}&apikey=7652f97b`).then(
            (response) => response.json()).then((data) => {
                if (data.Search) {
                    dispatch(getMovies(data.Search))
                }
            })
    };

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={state.searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!state.searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
        
    );

}

export default SearchBox;