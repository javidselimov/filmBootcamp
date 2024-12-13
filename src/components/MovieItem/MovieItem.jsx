import React from 'react';
import './MovieItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveMovie } from '../../app/feautures/favorites/favoritesSlice';

const MovieItem = (props)=> {
        const { Title, Year, Poster, imdbID } = props;
        const dispatch = useDispatch()
        const favorites = useSelector((state)=>state.favorites)
        const setFavorite=()=>{
            const movie = {
                imdbID: imdbID,
                Title: Title,
                Year:Year
            }
            const isContained = favorites.movies.find((item)=>item.imdbID===imdbID);
            if(!isContained){
                dispatch(saveMovie(movie))
            }
            
        }

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={()=>setFavorite()}>Добавить в список</button>
                </div>
            </article>
        );
    
}
 
export default MovieItem;