// import { useEffect, useState } from 'react';
// import './SearchBox.css';
// import MovieItem from '../MovieItem/MovieItem';
// import { useDispatch } from 'react-redux';
// import { fetchMoviesAsync } from '../features/movieActions';

// export default function SearchBox() {
//     const [searchLine, setSearchLine] = useState("")
//     const dispatch = useDispatch();

//     const searchLineChangeHandler = (e) => {
//         setSearchLine(e.target.value);
//     }
//     const searchBoxSubmitHandler = (e) => {
//         e.preventDefault();
//         // handleInfo()
//         if (searchLine) {
//             dispatch(fetchMoviesAsync(searchLine)); // API-dən filmləri gətir
//         }
//     }

//     // const [film, setFilm] = useState([]);
//     // const [filteredVersion, setFilteredVersion] = useState([]);

//     // const handleInfo= () => {
//     //     setFilteredVersion(film.filter(item =>item.Title.toLowerCase().includes(searchLine.toLowerCase())));
//     // };
//     // useEffect(() => {
//     //     fetch('https://www.omdbapi.com/?s=godfather&apikey=3f1a9991')
//     //         .then(response => response.json())
//     //         .then(data => {
//     //             setFilm(data.Search);
//     //             setFilteredVersion(data.Search.slice(0,2));
//     //         })
//     //         .catch(error => {
//     //             console.log('Error', error);
//     //         });
//     // }, [])
//     // const render = filteredVersion.map(item => <MovieItem key={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />)
//     return (
//         <div className="search-box">
//             <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
//                 <label className="search-box__form-label">
//                     Искать фильм по названию:
//                     <input
//                         value={searchLine}
//                         type="text"
//                         className="search-box__form-input"
//                         placeholder="Например, Shawshank Redemption"
//                         onChange={searchLineChangeHandler}
//                     />
//                 </label>
//                 <button
//                     type="submit"
//                     className="search-box__form-submit"
//                     disabled={!searchLine}
//                 >
//                     Искать
//                 </button>
//             </form>
//             {/* {render} */}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBox.css';
import {  setFiltered, setMovies } from '../../features/movieSlice';
import MovieItem from '../MovieItem/MovieItem';
// import { setMovies } from "../../features/movieSlice";

export default function SearchBox() {
    const [searchState,setSearchState]=useState({
        searchLine: ''
    })

    // const [movies, setMovies] = useState([]);
    // const [filtered, setFiltered] = useState([]);
    // const [imdbIDValue, setImdbIDValue] = useState([]);

    const dispatch = useDispatch();
    // const filteredMovies = useSelector((state) => state.movies.filteredMovies);
    const movies = useSelector((state) => state.movies.movies);
    // const { movies } = useSelector((state) => state.movies);
   
    const searchLineChangeHandler = (e) => {
        setSearchState((p) => ({
            ...p, searchLine: e.target.value
        }))
    }

    useEffect(() => {
        fetch("https://www.omdbapi.com/?s=godfather&apikey=f4901c6")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.Search);
            // data.Search.forEach((element) => {
            //     dispatch(setMovies(element));
            // })
            dispatch(setMovies(data.Search.slice(0,2)));
            dispatch(setFiltered(data.Search.slice(0, 2)));
            // setMovies(data.Search.slice(0,2));
            // setFiltered(data.Search.slice(0, 2));
        })
    }, [dispatch])


    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    const { searchLine } = searchState;

    const handleSearch = () => {
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=f4901c6`)
        .then((response) => response.json())
        .then((data) => {
            const filteredMovies = data.Search.filter((element) =>
                element.Title.includes(searchLine)
            );
            dispatch(setMovies(data.Search));
            dispatch(setFiltered(filteredMovies));
            // setMovies(data.Search);
            // setFiltered(filteredMovies);
        })
    }

    const render = movies.map((element) => {
        // console.log("element = " + element.Title);
        return <MovieItem 
            key={element.imdbID} 
            title={element.Title} 
            year={element.Year} 
            poster={element.Poster}
            // imdbID={element.imdbID} 
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
                    onClick={handleSearch}
                >
                    Искать
                </button>
            </form>
            {render}
        </div>
    );
}
 
