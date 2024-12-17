import { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [listId, setListId] = useState(null);

  const handleAddToFavorites = (movie) => {
    if (!favorites.find((f) => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const handleRemoveFromFavorites = (imdbID) => {
    setFavorites(favorites.filter((f) => f.imdbID !== imdbID));
  };

  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <SearchBox onSearch={setMovies} />
          <Movies movies={movies} onAddToFavorites={handleAddToFavorites} />
        </section>
        <aside className="main-page__favorites">
          {listId ? (
            <a href={`/list/${listId}`}>Список доступен по ссылке</a>
          ) : (
            <Favorites
              favorites={favorites}
              onRemove={handleRemoveFromFavorites}
              onSave={setListId}
            />
          )}
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
