import { useState } from 'react';
import './Favorites.css';

<<<<<<< HEAD
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
=======
const Favorites = () => {
    const [title, setTitle] = useState('Новый список');
    const [movies, setMovies] = useState([
        { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    ]);

    const handleRemoveMovie = (imdbID) => {
        setMovies(movies.filter(movie => movie.imdbID !== imdbID));
    };

    const handleSaveList = () => {
        const movieIds = movies.map(movie => movie.imdbID);

        // Отправка POST-запроса на сервер для сохранения списка
        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                movies: movieIds,
            }),
        })
            .then(response => response.json())
            .then(data => {
                const listLink = `http://localhost:3000/list/${data.id}`;
                setTitle(listLink);
            });
    };

    return (
        <div className="favorites">
            <input
                value={title}
                className="favorites__name"
                onChange={(e) => setTitle(e.target.value)}
                disabled={title.includes('http')}
            />
            <ul className="favorites__list">
                {movies.map((item) => (
                    <li key={item.imdbID}>
                        {item.title} ({item.year})
                        <button onClick={() => handleRemoveMovie(item.imdbID)}>Удалить</button>
                    </li>
                ))}
            </ul>
            <button type="button" className="favorites__save" onClick={handleSaveList}>Сохранить список</button>
        </div>
    );
>>>>>>> 5aaa1fab40d24dd35e8b454a0e12857b36ace822
};

export default Favorites;