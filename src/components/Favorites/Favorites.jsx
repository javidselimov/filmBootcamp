import  {  useState } from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';
import  {deleteMovie}  from '../../app/feautures/favorites/favoritesSlice';


const  Favorites=() =>{
    const favorites = useSelector((state)=>state.favorites)
    const dispatch = useDispatch()
    const deleteItem = (id)=>{
        const filtered = favorites.movies.filter((movies)=>movies.imdbID!==id);
        dispatch(deleteMovie(filtered))
    }

        return (
            <div className="favorites">
                <input value={favorites.title} className="favorites__name" />
                <ul className="favorites__list">
                    {favorites.movies.map((item) => {
                        return <li key={item.imdbID}><button className='delete' onClick={()=>deleteItem(item.imdbID)}>Delete</button>{item.Title} ({item.Year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
}

export default Favorites;