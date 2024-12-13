import { useEffect, useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie, setFavorites, setFiltered, setTitle } from '../../features/moviesSlice';

export default function Favorites() {
    const title = useSelector((state) => state.movies.title);
    const favMovies = useSelector((state) => state.movies.favouriteMovies);
    const [titleInput, setTitleInput] = useState(title);
    const [savedLists, setSavedLists] = useState([]);
    const dispatch = useDispatch();

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitleInput(value);
        dispatch(setTitle(value));
    };

    const handleRemoveMovie = (imdbID) => {
        dispatch(removeFavoriteMovie(imdbID));
    };

    const render = favMovies.map((item) => (
        <li key={item.imdbID}>
            {item.title} ({item.year})
            <button className="favorites__delete-button" onClick={() => handleRemoveMovie(item.imdbID)}>
                Delete
            </button>
        </li>
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
        // dispatch(setFavorites([]));
    }, [])

    const handleRemoveList = (id) => {
        const newLists = savedLists.filter((element) => element.id !== id);
        setSavedLists(newLists);
        localStorage.setItem("savedLists", JSON.stringify(newLists));
    }

    const renderLinks = savedLists.map((list) => (
        <div key={list.id} className="favorites__link-container">
            <a href={`http://localhost:5173/list/${list.id}`} className="favorites__link">
                {list.name}
            </a>
            <button className="favorites__delete-button" onClick={() => handleRemoveList(list.id)}>
                Delete
            </button>
        </div>
    ));

    return (
        <div className="favorites">
            <input value={titleInput} className="favorites__name" onChange={handleTitleChange} />
            <ul className="favorites__list">{render}</ul>
            <div className="link">
                <button onClick={handleSaveList} disabled={!titleInput.trim()} type="button" className="favorites__save">
                    Сохранить список
                </button>
                <hr />
                {renderLinks}
            </div>
        </div>
    );
}
