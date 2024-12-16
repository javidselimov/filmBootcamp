import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltered, setMovies } from '../../features/movieSlice';
import MovieItem from '../MovieItem/MovieItem';
import './SearchBox.css';

export default function SearchBox() {
    const [searchState, setSearchState] = useState({ searchLine: '' });
    const movies = useSelector((state) => state.movies.movies);
    const baseUrl = "https://www.omdbapi.com/?s=godfather&apikey=f4901c6";
    const dispatch = useDispatch();
    const { searchLine } = searchState;

    const handleInfo = () => {
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=f4901c6`)
            .then((response) => response.json())
            .then((data) => {
                const filteredMovies = data.Search.filter((element) =>
                    element.Title.includes(searchLine)
                );
                dispatch(setMovies(data.Search));
                dispatch(setFiltered(filteredMovies));
            })
    };

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setMovies(data.Search.slice(0, 2)));
                dispatch(setFiltered(data.Search));
            })
    }, []);

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        handleInfo();
        setSearchState({ searchLine: '' });
    }
    const searchLineChangeHandler = (e) => {
        setSearchState((prev) => ({
            ...prev, searchLine: e.target.value
        }))
    }
    const render = movies.map((element) => {
        return <MovieItem key={element.imdbID} title={element.Title} year={element.Year} poster={element.Poster} imdbID={element.imdbID}
        />
    })
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
            {render}
        </div>
    );
}

