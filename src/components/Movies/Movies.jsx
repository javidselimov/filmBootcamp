// import React from 'react';
// import MovieItem from '../MovieItem/MovieItem';
// import './Movies.css';

// const Movies = ({ movies, onAddToFavorites }) => {
//   return (
//     <ul className="movies">
//       {movies.map((movie) => (
//         <li className="movies__item" key={movie.imdbID}>
//           <MovieItem {...movie} onAddToFavorites={onAddToFavorites} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Movies;

import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ({ movies, onAddToFavorites }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            imdbID={movie.imdbID}
            onAddToFavorites={onAddToFavorites}
          />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
