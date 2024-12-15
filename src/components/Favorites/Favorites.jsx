import { useState } from 'react';
import './Favorites.css';

const Favorites = ({ favorites, onRemove, onSave }) => {
  const [listTitle, setListTitle] = useState('Новый список');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const saveFavoritesList = async () => {
    try {
      const response = await fetch('https://acb-api.algoritmika.org/api/movies/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: listTitle,
          movies: favorites.map(movie => movie.imdbID),
        }),
      });
      const result = await response.json();
      onSave(result.id);
    } catch (error) {
      console.error('Error saving the list:', error);
    }
  };
  const handleTitleEdit = () => setIsEditingTitle(true);
  const updateTitle = (e) => setListTitle(e.target.value);

  return (
    <div className="favorites">
      <input
        type="text"
        value={listTitle}
        onChange={updateTitle}
        onClick={handleTitleEdit}
        className={`favorites__name ${isEditingTitle ? 'editing' : ''}`}
        placeholder={isEditingTitle ? '' : 'Новый список'}
      />
      <ul className="favorites__list">
        {favorites.map((movie) => (
          <li key={movie.imdbID} className="favorites__item">
            <span>{movie.title} ({movie.year})</span>
            <button
              className="favorites__remove"
              onClick={() => onRemove(movie.imdbID)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="favorites__save"
        onClick={saveFavoritesList}
        disabled={favorites.length === 0}
      >
        Сохранить список
      </button>
    </div>
  );
};

export default Favorites;