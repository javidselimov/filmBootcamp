import  {  useState } from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';


const  Favorites=() =>{


    const favorites = useSelector((state)=>state.favorites)



        return (
            <div className="favorites">
                <input value={favorites.title} className="favorites__name" />
                <ul className="favorites__list">
                    {favorites.movies.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    
}

export default Favorites;