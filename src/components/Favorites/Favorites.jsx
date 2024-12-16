import { useEffect, useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteMovie, setFavorites, setTitle } from '../../features/moviesSlice';

export default function Favorites() {
    const title = useSelector((state) => state.movies.title);
    const favMovies = useSelector((state) => state.movies.favouriteMovies);
    const [titleInput, setTitleInput] = useState(title);
    const [savedLists, setSavedLists] = useState([]);
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    let errorMessage = null;

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitleInput(value);
        dispatch(setTitle(value));

        if (savedLists.some((list) => list.name.toLowerCase() === value.toLowerCase())) {
            setError("* This is not available");
        } else {
            setError("");
        }
    };
    
    if(error){
        errorMessage =  <p className="errorMessage">{error}</p>;
    }
    
    const handleRemoveMovie = (imdbID) => {
        dispatch(removeFavoriteMovie(imdbID));
    };

    const render = favMovies.map((item) => (
        <div key={item.imdbID} className="linkContainer">
            <li className="favoritesLink">
                {item.title} ({item.year})
            </li>
            <button  className='secondDeleteButton' onClick={() => handleRemoveMovie(item.imdbID)}>
                X
            </button>
        </div>
    ));

    const handleSaveList = () => {
        const data = {
            title: titleInput,
            movies: favMovies,
        };
        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                const newSavedLists = [
                    ...savedLists,
                    {id: data.id, name: titleInput},
                ]

                setSavedLists(newSavedLists);
                localStorage.setItem("savedLists", JSON.stringify(newSavedLists));
                setTitleInput("");
                dispatch(setFavorites([]));
            })
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        const savedListsFromStorage = JSON.parse(localStorage.getItem("savedLists")) || [];
        setSavedLists(savedListsFromStorage);
    }, [])

    const handleRemoveList = (id) => {
        const newLists = savedLists.filter((element) => element.id !== id);
        setSavedLists(newLists);
        localStorage.setItem("savedLists", JSON.stringify(newLists));
    }

    const renderLinks = savedLists.map((list) => (
        <div key={list.id} className="linkContainer">
            <a href={`http://localhost:5173/list/${list.id}`} className="favoritesLink">
                {list.name}
            </a>
            <button className='secondDeleteButton' onClick={() => handleRemoveList(list.id)}>
                X
            </button>
        </div>
    ));

    return (
        <div className="favorites">
            <input value={titleInput} className="favorites__name" onChange={handleTitleChange}/>
            {errorMessage}
            <ul className="favorites__list">{render}</ul>
            <div className="link">
                <button onClick={handleSaveList} disabled={!titleInput.trim() || !!error} type="button" className="favorites__save">
                    Сохранить список
                </button>
                <hr />
                {renderLinks}
            </div>
        </div>
    );
}
