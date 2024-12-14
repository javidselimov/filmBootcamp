import  {  useState } from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';
import  {deleteMovie, resetMovie, setTitle}  from '../../app/feautures/favorites/favoritesSlice';
import { setList } from '../../app/feautures/listId/listIdSlice';

const  Favorites=() =>{
    const favorites = useSelector((state)=>state.favorites)
    const dispatch = useDispatch()
    const deleteItem = (id)=>{
        const filtered = favorites.movies.filter((movies)=>movies.imdbID!==id);
        dispatch(deleteMovie(filtered))
    }
    const idList= useSelector((state)=>state.ids)
    const saveMovieList = ()=>{
        if(favorites.movies.length){
            fetch('https://acb-api.algoritmika.org/api/movies/list', 
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(favorites)
                }
            ).then(res=>res.json()).then((data)=>{
                const {id, title} = data;
                dispatch(setList({id, title}))
            })
            dispatch(resetMovie())

        }
    }
    const getInput = (e)=>{
            dispatch(setTitle(e.target.value))
        }

        return (
            <div className="favorites">
                <input value={favorites.title} onChange={(e)=>getInput(e)} className="favorites__name" />
                <ul className="favorites__list">
                    {favorites.movies.map((item) => {
                        return <li key={item.imdbID}><button className='delete' onClick={()=>deleteItem(item.imdbID)}>Delete</button>{item.Title} ({item.Year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick={()=> saveMovieList()}>Сохранить список</button>
                    {idList.list &&
                        <div>
                            <ul>
                                {idList.list.map((item)=>{
                                    return <li><a href={`/list/${item.id}`}>{item.title}</a></li>
                                })}
                            </ul>
                        </div>}
            </div>
        );
}

export default Favorites;