import React, { useEffect, useState } from 'react';
import './ListPage.css';



const ListPage = (props) => {
    console.log(props)
    const [state, setState] = useState(1)

    setState({movies: state});

    console.log(state.movies, movies)

    useEffect(() => {
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    })

    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {state.movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;