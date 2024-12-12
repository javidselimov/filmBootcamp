import React, { useState } from 'react';
import './MovieItem.css';
import { useDispatch } from 'react-redux';
import { addTolist } from '../../features/movieSlice';

export default function MovieItem({ title, year, poster }) {
    const [newMovie, setNewMovie]=useState({title, year});
    const dispatch=useDispatch();
    const handleAdding=()=>{
        console.log({title, year})
        if (newMovie){
            dispatch(addTolist(newMovie));
            setNewMovie("");
        }
    }
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button onClick={handleAdding} type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
