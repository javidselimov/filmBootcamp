import React, { useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../../app/features/movie/movieSlice';
export default function Movies() {
    // const [state,setState]= useState({ movies: [
        
    // ]});
    const movies =useSelector((state)=>state.movies.movies);
    const dispatch=useDispatch();

     const handleRemoving=(imdbID)=>{
                dispatch(removeFromList(imdbID));
        }
        return ( 
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} /> <button onClick={()=>handleRemoving(movie.imdbID)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
