import React, { useState, useEffect } from 'react';
import './ListPage.css';

const ListPage = ({ match }) => {
    const [movies, setMovies] = useState([
        { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
    ]);

    useEffect(() => {
        const id = match.params; 
        console.log(id);
        // TODO: серверге запросlar yerinə yetirilməlidir
        // TODO: imdbID-lərə uyğun əlavə məlumatları çəkmək üçün API çağırışları
    }, [match.params]); 

    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movies.map((item) => (
                    <li key={item.imdbID}>
                        <a 
                            href={`https://www.imdb.com/title/${item.imdbID}/`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {item.title} ({item.year})
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
