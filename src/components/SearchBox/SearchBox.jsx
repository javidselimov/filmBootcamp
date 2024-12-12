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
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../app/features/movie/movieSlice';
import { fetchMoviesAsync } from "../features/movieActions"; 

export default function SearchBox() {
    const [searchLine, setSearchLine] = useState('');

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies); 

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    };

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        if (searchLine) {
            dispatch(fetchMovies(searchLine)); 
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
}
