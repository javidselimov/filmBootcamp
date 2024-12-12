import React, { Component, useEffect, useState } from 'react';
import './ListPage.css';
import { useParams } from 'react-router-dom';

export default function ListPage() {
    const [state, setState] = useState({
        movies: [
            // { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    })
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
    const { id } = useParams();
    useEffect(() => {
        if(id) {
            fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setState({movies: data.movies});
            })
        }
    }, [id])
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
  )
}