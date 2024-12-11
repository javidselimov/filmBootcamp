import { useEffect, useState } from 'react';
import './SearchBox.css';
import MovieItem from '../MovieItem/MovieItem';

export default function SearchBox() {
    const [searchLine, setSearchLine] = useState("")

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    const [film, setFilm] = useState([]);
    // const handleInfo= () => {
    //     setFilteredVersion(film.filter(item =>item.Title.includes(inputValue)|| item.department.includes(inputValue)));
    //     setInputValue('');
    // };
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=godfather&apikey=3f1a9991&page-size=2')
            .then(response => response.json())
            .then(data => {
                setFilm(data.Search.slice(0,2));
            })
            .catch(error => {
                console.log('Error', error);
            });
    }, [])
    const render = film.map(item => <MovieItem key={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />)
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
                // onClick={handleInfo}
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