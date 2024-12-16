import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromList } from '../redux/actions/listActions';

const Lists = () => {
  const dispatch = useDispatch();

  const { savedLists } = useSelector((state) => state.lists);

  return (
    <div className="lists-page">
      <h1>My Saved Lists</h1>
      {savedLists?.length > 0 ? (
        savedLists.map((list, index) => (
          <div key={index} className="saved-list">
            <h2>{list.name}</h2>
            <ul>
              {list.movies.map((movie) => (
                <li key={movie.imdbID}>
                  {movie.Title} ({movie.Year})
                  <button
                    className="btn-remove"
                    onClick={() => dispatch(removeFromList(movie))}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No saved lists available.</p>
      )}
    </div>
  );
};

export default Lists;
