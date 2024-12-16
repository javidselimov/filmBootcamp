import React, { useEffect, useState } from 'react';
import './ListPage.css';
import { useParams } from 'react-router-dom';

export default function ListPage() {
    const [state, setState] = useState({
        title: "",
        movies: []
    });

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setState({
                    title: data.title,
                    movies: data.movies
                });
            })
    }, [id]);

    return (
        <div className="list-page">
            <div className="container">
                <h1 className="list-page__title">{state.title}</h1>
                <ul>
                    {state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.title} ({item.year}) </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
