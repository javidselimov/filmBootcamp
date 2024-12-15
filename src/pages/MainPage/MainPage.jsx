<<<<<<< HEAD
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 5aaa1fab40d24dd35e8b454a0e12857b36ace822
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const MainPage = () => {
<<<<<<< HEAD
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [listId, setListId] = useState(null);

  const handleAddToFavorites = (movie) => {
    if (!favorites.find((f) => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const handleRemoveFromFavorites = (imdbID) => {
    const removedMovie = favorites.find((f) => f.imdbID === imdbID);
    setFavorites(favorites.filter((f) => f.imdbID !== imdbID));
    // Возвращаем удалённый фильм в поиск
    setMovies((prevMovies) => [...prevMovies, removedMovie]);
  };

  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <SearchBox onSearch={setMovies} />
          <Movies
            movies={movies.filter((movie) => !favorites.some((f) => f.imdbID === movie.imdbID))}
            onAddToFavorites={handleAddToFavorites}
          />
        </section>
        <aside className="main-page__favorites">
          {listId ? (
            <div>
              <a href={`/list/${listId}`}>Список доступен по ссылке</a>
              <button
                onClick={() => setListId(null)}
                className="favorites__save"
              >
                Вернуться на главную
              </button>
            </div>
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
=======
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const handleAddToFavorites = (movie) => {
        if (!favoriteMovies.some(favMovie => favMovie.imdbID === movie.imdbID)) {
            setFavoriteMovies([...favoriteMovies, movie]);
        }
    };

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox />
                    </div>
                    <div className="main-page__movies">
                        <Movies onAddToFavorites={handleAddToFavorites} />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites movies={favoriteMovies} />
                </aside>
            </main>
        </div>
    );
>>>>>>> 5aaa1fab40d24dd35e8b454a0e12857b36ace822
};

export default MainPage;
