import React, { useEffect, useState } from 'react';
import './ListPage.css';
import {useParams} from "react-router-dom"
const ListPage = ()=> {
  
    const { id } = useParams()
    const [state, setState] = useState({ title: '', movies: [] })
    useEffect(()=>{
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`).then(res=>res.json()).then(data=>setState(data));
    }, [id])
    
    

        return (
            <div className="list-page">
                <h1 className="list-page__title">{state.title}</h1>
                <ul>
                    {state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    
}
 
export default ListPage;