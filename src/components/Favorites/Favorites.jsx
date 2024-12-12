import { useState } from 'react';
import './Favorites.css';
import { useSelector } from 'react-redux';


const Favorites = () => {
    //    const [state,setState] =  useState({
    //         title: 'Новый список',
    //         movies: [
    //             { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //         ]
    //     })
    const favorites = useSelector((state) => state.favorites);

    return (
        <div className="favorites">
            <input value={favorites.title} className="favorites__name" />
            <ul className="favorites__list">
                {favorites.movies.map((item) => {
                    return <>
                        <li key={item.imdbID}>{item.Title} ({item.Year})</li>
                        <button>Delete</button>
                    </>;
                })}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    );

}

export default Favorites;