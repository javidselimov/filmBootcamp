import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

const ListPage = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const params=useParams()
    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(response => response.json())
            .then(data => {
                const moviesInfo = data.movies.map((imdbID) =>
                    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=YOUR_API_KEY`)
                        .then(response => response.json())
                );
                Promise.all(moviesInfo).then(movies => setMovies(movies));
            });
    }, [id]);
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movies.map((item) => (
                    <li key={item.imdbID}>
                        <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank" rel="noopener noreferrer">
                            {item.Title} ({item.Year})
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
