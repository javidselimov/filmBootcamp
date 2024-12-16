import React, { useState } from 'react';
import './MovieItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTolist } from '../../features/movieSlice';

export default function MovieItem({ title, year, poster,imdbID }) {
    const listItem = useSelector((state) => state.movies.listItem);
        const dispatch=useDispatch();

    const handleAdding = () => {
        let checking = false;
    
        for (let i = 0; i < listItem.length; i++) {
            if (listItem[i].imdbID === imdbID) {
                checking = true;
                break; 
            }
        }
    
        if (checking) {
            alert('Bu filmi liste elave etmisiniz');
        } else {
            console.log({ title, year, imdbID });
            dispatch(addTolist({ title, year, imdbID }));
        }
    };

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
