import  {  useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../../features/movieSlice';

export default function Favorites(){
   const [state,setState] =  useState({
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    })
    const movies =useSelector((state)=>state.movies.movies);
    const dispatch=useDispatch();

     const handleRemoving=(imdbID)=>{
                dispatch(removeFromList(imdbID));
        }
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {state.movies.map((item) => {
                        return <li key={item.imdbID}>{item.title} ({item.year}) <button onClick={()=>handleRemoving(item.imdbID)}>Delete</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }