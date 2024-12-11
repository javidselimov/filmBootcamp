import React, { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const MainPage = () => {
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
};

export default MainPage;
