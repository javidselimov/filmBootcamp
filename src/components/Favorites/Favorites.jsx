import { useState } from 'react';
import './Favorites.css';

const Favorites = ({ favorites, onRemove, onSave }) => {
  const [title, setTitle] = useState('Новый список');

  const handleSave = async () => {
    const response = await fetch(
      'https://acb-api.algoritmika.org/api/movies/list',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, movies: favorites.map((f) => f.imdbID) }),
      }
    );
    const data = await response.json();
    onSave(data.id);
  };

  return (
    <div className="favorites">
      <input
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {favorites.map((item) => (
          <li key={item.imdbID}>
            {item.title} ({item.year})
            <button onClick={() => onRemove(item.imdbID)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="favorites__save"
        onClick={handleSave}
        disabled={!favorites.length}
      >
        Сохранить список
      </button>
    </div>
  );
};

export default Favorites;
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







