import React, { Component, useEffect, useState } from 'react';
import './ListPage.css';
import { useParams } from 'react-router-dom';

export default function ListPage() {
    const [state, setState] = useState({
        movies: []
    })

    const [title, setTitle] = useState("");
    
    const { id } = useParams();
    useEffect(() => {
        if(id) {
            fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setState({movies: data.movies});
                setTitle(data.title);
            })
        }
    }, [id])
  return (
    <div className="list-page">
        <h1 className="list-page__title">{title}</h1>
        <ul>
            {state.movies.map((item) => {
                return (
                    <li key={item.imdbID}>
                        <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.title} ({item.year})</a>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}