import  {  useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie, setFiltered, setTitle } from '../../features/moviesSlice';


export default function  Favorites() {
//    const [state, setState] =  useState({
        // title: 'Новый список',
        // movies: [
        //     { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        // ]
    // })

    const title = useSelector((state) => state.movies.title);
    const favMovies = useSelector((state) => state.movies.favouriteMovies);
    const [titleInput, setTitleInput] = useState(title);
    const [savedListId, setSavedListId] = useState(null);
    const dispatch = useDispatch();

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitleInput(value);
        dispatch(setTitle(value));
    }

    const handleRemoveMovie = (imdbID) => {
        dispatch(removeFavoriteMovie(imdbID));
    }

    const movieIds = favMovies.map((movie) => movie.imdbID);
    console.log("movieIds", movieIds);

    const render = favMovies.map((item) => {
        return (
            <li key={item.imdbID}> {item.title} ({item.year})
                <button className="favorites__delete-button" onClick = {() => handleRemoveMovie(item.imdbID)}>
                    Delete
                </button>
            </li>
        )
    })

    const data = {
        title: titleInput,
        movies: movieIds
    }

    console.log("Sending data:", data);

    const handleSaveList = () => {
        fetch("https://acb-api.algoritmika.org/api/movies/list", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
          })
          .then(responseData => {
            console.log("Yaradılmış siyahı:", responseData);

            const listId = responseData.id;
            setSavedListId(listId);

            // return fetch(`https://acb-api.algoritmika.org/api/movies/list/${listId}`)
            // .then((response) => response.json)
            // .then((data) => {
            //     console.log("Siyahının məlumatları:", data);
            // })
        })
    }

    const renderLink = () => {
        if(savedListId) {
            return (
                <a href={`http://localhost:3000/list/${savedListId}`} className="favorites__link">
                    See List
                </a>
            )
        }
    }

    return (
        <div className="favorites">
            {/* <input value="Новый список" className="favorites__name"/> */}
            <input value={title} className="favorites__name" onChange={handleTitleChange} />
            <ul className="favorites__list">
                {render}
            </ul>
            {renderLink()}
            <button onClick={handleSaveList} disabled = {!titleInput.trim()} type="button" className="favorites__save">Сохранить список</button>
        </div>
    );
    
}