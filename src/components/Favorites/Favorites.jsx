import  {  useState } from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';


const  Favorites=() =>{
//    const [state, setSTate] =  useState({
        // title: 'Новый список',
        // movies: [
        //     { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
//         ]
//     })





        return (
            <div className="favorites">
                <input value={state.title} className="favorites__name" />
                <ul className="favorites__list">
                    {state.movies.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    
}

export default Favorites;