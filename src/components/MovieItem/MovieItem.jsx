
// import './MovieItem.css';

// const MovieItem = ({ title, year, poster, imdbID, onAddToFavorites }) => {
//   return (
//     <article className="movie-item">
//       <img className="movie-item__poster" src={poster} alt={title} />
//       <div className="movie-item__info">
//         <h3 className="movie-item__title">
//           {title}&nbsp;({year})
//         </h3>
//         <button
//           type="button"
//           className="movie-item__add-button"
//           onClick={() => onAddToFavorites({ title, year, imdbID })}
//         >
//           Добавить в список
//         </button>
//       </div>
//     </article>
//   );
// };

// export default MovieItem;

import React from 'react';
import './MovieItem.css';

const MovieItem = ({ title, year, poster, imdbID, onAddToFavorites }) => {
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={poster} alt={title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {title} ({year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={() => onAddToFavorites({ title, year, imdbID, poster })}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;





// import './MovieItem.css';

// const MovieItem = ({ title, year, poster, imdbID, onAddToFavorites }) => {
//   return (
//     <article className="movie-item">
//       <img className="movie-item__poster" src={poster} alt={title} />
//       <div className="movie-item__info">
//         <h3 className="movie-item__title">
//           {title}&nbsp;({year})
//         </h3>
//         <button
//           type="button"
//           className="movie-item__add-button"
//           onClick={() => onAddToFavorites({ title, year, imdbID })}
//         >
//           Добавить в список
//         </button>
//       </div>
//     </article>
//   );
// };

// export default MovieItem;