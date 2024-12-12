import { useState } from 'react';
import './SearchBox.css';
import ListPage from '../../pages/ListPage/ListPage';
import Movies from '../Movies/Movies';

const SearchBox = () => {
    const [state, setState] = useState({
        searchLine: ''
    })

    const [movies, setMovies] = useState([]);

    const searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
        console.log(state.searchLine)
    }
    // const searchBoxSubmitHandler = (e) => {
    //     e.preventDefault();
    //     fetch(`https://www.omdbapi.com/?s=${state.searchLine}&apikey=7652f97b`).then((response) => {
    //         return response.json()
    //     }).then((movies) => {
    //         console.log(movies);
    //         <ListPage movies={movies} />
    //     })
    // }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=7652f97b`).then(
            (response) => response.json()).then((data) => {
                if (data.Search) {
                    setMovies(data.Search);
                } else { setMovies([]); }
            }).catch((error) => {
                console.error('Error fetching movies:', error);
                setMovies([]);
            });
    };

    // const { searchLine } = state;

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
            {/* {movies && <Movies movies={movies} />}     */}
        </div>
        
    );

}

export default SearchBox;