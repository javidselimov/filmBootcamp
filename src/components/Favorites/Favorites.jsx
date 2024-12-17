

import React, { useState, useEffect } from 'react';
import './Favorites.css';

const Favorites = () => {
    const [state, setState] = useState({
        title: 'Yeni Siyahı',
        isSaved: false,
        movies: [],
        savedId: null,
    });


    useEffect(() => {
        const handleAddMovie = (movie) => {
            setState((prevState) => {
                if (!prevState.movies.some((item) => item.imdbID === movie.imdbID)) {
                    return {
                        ...prevState,
                        movies: [...prevState.movies, movie],
                    };
                }
                return prevState;
            });
        };

        const favoriteListElement = document.querySelector('.favorites');
        favoriteListElement.addEventListener('addToFavorites', (e) => handleAddMovie(e.detail));

        return () => {
            favoriteListElement.removeEventListener('addToFavorites', (e) => handleAddMovie(e.detail));
        };
    }, []);

    const handleRemoveMovie = (imdbID) => {
        setState((prevState) => ({
            ...prevState,
            movies: prevState.movies.filter((movie) => movie.imdbID !== imdbID),
        }));
    };

    const handleChangeName = (e) => {
        setState((prevState) => ({
            ...prevState,
            title: e.target.value,
        }));
    };

    const handleCreateNewList = () => {
        setState({
            title: 'Yeni Siyahı',
            isSaved: false,
            movies: [],
            savedId: null,
        });
    };

    const handleSaveList = async () => {
        try {
            const response = await fetch('https://acb-api.algoritmika.org/api/movies/list', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: state.title,
                    movies: state.movies.map((movie) => movie.imdbID),
                }),
            });
            const data = await response.json();
            setState((prevState) => ({
                ...prevState,
                isSaved: true,
                savedId: data.id,
            }));
        } catch (error) {
            console.error('Siyahını yadda saxlamaq mümkün olmadı', error);
        }
    };

    return (
        <div className="favorites">

            <input
                value={state.title}
                className="favorites__name"
                onChange={handleChangeName}
                disabled={state.isSaved}
            />

            <ul className="favorites__list">
                {state.movies.map((movie) => (
                    <li key={movie.imdbID}>
                        {movie.title} ({movie.year})
                        <button className='delete' onClick={() => handleRemoveMovie(movie.imdbID)}>X</button>
                    </li>
                ))}
            </ul>


            <button
                type="button"
                className="favorites__save"
                onClick={handleSaveList}
                disabled={state.isSaved}
            >
                Siyahını əlavə et
            </button>

            {state.isSaved && (
                <div>
                    <a href={`/list/${state.savedId}`} target="_blank" rel="noopener noreferrer">
                        <button className='grey'>Keçidə klikləyin</button>
                    </a>
                </div>

            )
            }
        </div >
    );
};

export default Favorites;