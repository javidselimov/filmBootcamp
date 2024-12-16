import React, { useEffect, useState } from 'react';
import './ListPage.css';
import { useParams } from 'react-router-dom';



const ListPage = () => {

    const { id } = useParams();

    const [state, setState] = useState({ title: '', movies: [] })

    useEffect(() => {
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`).then(res => { return res.json() }).then(data => {
            setState(data)
        })
    }, [id])


    return (
        <div className="list-page">
            <h1 className="list-page__title">{state.title}</h1>
            <ul>
                {state.movies.map((item) => {
                    return (
                        <li className="favorites-item" key={item.imdbID}>
                            <img className="item_poster" src={item.Poster} alt={item.Title} />
                            <a className="film-name" href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;