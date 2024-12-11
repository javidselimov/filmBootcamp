import { useState } from 'react';
import './Favorites.css';

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
};

export default Favorites;