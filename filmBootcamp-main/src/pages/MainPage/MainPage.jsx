import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setResultData } from '../../redux/actions/movieActions';
import { addToList, saveList, setSelectedList } from '../../redux/actions/listActions';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { removeFromList } from '../../redux/actions/listActions';
import "../Pages.css"


const Home = () => {
  const dispatch = useDispatch();
  const { searchQuery, resultData } = useSelector((state) => state.movies);
  const { addedMovies, selectedList, isListSaved } = useSelector(
    (state) => state.lists
  );

  const fetchMovies = useCallback(() => {
    if (searchQuery.trim() === '') {
      dispatch(setResultData([]));
      return;
    }

    fetch(`https://www.omdbapi.com/?apikey=236bf47&s=${searchQuery}&type=movie`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setResultData(data.Search || []));
      })
      .catch(() => alert('Please check your internet connection!'));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSaveList = () => {
    if (selectedList.trim() && addedMovies.length) {
      dispatch(
        saveList({ name: selectedList, movies: addedMovies })
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="container-left">
          <div className="search-part">
            <input
              id="movie-search"
              type="text"
              placeholder="Search.."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="btn-primary-add btn-search" onClick={fetchMovies}>
              Search
            </button>
          </div>
          <div className="moviecards">
            {resultData.map((movie) => (
              <div className="card" key={movie.imdbID}>
                <img src={movie.Poster} alt="film-img" />
                <h3>
                  <span className="name">{movie.Title}</span>({movie.Year})
                </h3>
                <div className="bts">
                  <button
                    className="btn-primary-add"
                    onClick={() => dispatch(addToList(movie))}
                  >
                    Add To List
                  </button>
                  <Link to={`/details/${movie.imdbID}`}>
                    <button className="btn-primary-add">Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-right">
          <div className="list-area">
            <input
              className="list-inp"
              placeholder="New List"
              value={selectedList}
              disabled={isListSaved}
              onChange={(e) => dispatch(setSelectedList(e.target.value))}
            />
            {!isListSaved && (
              <button className="btn-primary-add" onClick={handleSaveList}>
                Save List
              </button>
            )}
            <Link to="/lists">
              <button className="btn-primary-add">My Lists</button>
            </Link>
            <div className="list-items">
              {addedMovies.map((movie) => (
                <div key={movie.imdbID} className="list-item">
                  <span>{movie.Title}</span>
                  <button
                    className="btn-remove"
                    onClick={() => dispatch(removeFromList(movie))}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
