import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import './MainPage.css';

const MainPage = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [initialMovies] = useState([
        {
            imdbID: 'tt3896198',
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        },
        {
            imdbID: 'tt0068646',
            title: "The Godfather",
            year: 1972,
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }
    ]);

    const handleAddToFavorites = (movie) => {
        const favoriteListElement = document.querySelector('.favorites');
        const event = new CustomEvent('addToFavorites', { detail: movie });
        favoriteListElement.dispatchEvent(event);
    };

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox onAdd={handleAddToFavorites} setMovies={setSearchedMovies} />
                    </div>
                    <div className="main-page__movies">
                        <Movies movies={searchedMovies.length ? searchedMovies : initialMovies} onAdd={handleAddToFavorites} />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites />
                </aside>
            </main>
        </div>
    );
};

export default MainPage;