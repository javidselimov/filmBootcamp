import { useEffect, useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList, saveList } from '../../features/movieSlice';

export default function Favorites() {
    const listItem = useSelector((state) => state.movies.listItem);
    const [savedLists, setSavedLists] = useState([]);
    const [listName, setListName] = useState('');
    const dispatch = useDispatch();
    const api = 'https://acb-api.algoritmika.org/api/movies/list'

    const handleInputChange = (e) => {
        setListName(e.target.value);
    }
    const handleRemoving = (imdbID) => {
        dispatch(removeFromList(imdbID));
    }
    const handleSaving = () => {
        const film = {
            title: listName,
            movies: listItem,
        };
        fetch(`${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(film),
        })
            .then((res) => res.json())
            .then((data) => {
                const savedListsFromStorage = JSON.parse(localStorage.getItem('savedLists')) || [];
                savedListsFromStorage.push({ id: data.id, name: listName });
                localStorage.setItem('savedLists', JSON.stringify(savedListsFromStorage));

                setSavedLists(savedListsFromStorage);
                dispatch(saveList(data.id));
                setListName('');
            })
            .catch((error) => console.log('Error:', error));
    };
    console.log("lsititem", listItem)
    useEffect(() => {
        const savedListsFromStorage = JSON.parse(localStorage.getItem('savedLists')) || [];
        setSavedLists(savedListsFromStorage);
    }, []);

    const handleRemoveListsName = () => {
        localStorage.removeItem('savedLists');
        setSavedLists([]);
    }

    console.log("save olunmus list", savedLists)

    return (
        <div className="favorites">
            <input value={listName} onChange={handleInputChange} className="favorites__name" placeholder='Enter a list name' />
            <ul className="favorites__list">
                {listItem.map((item) => {
                    return <li key={item.imdbID}>{item.title} ({item.year}) <button className="favorites__delete" onClick={() => handleRemoving(item.imdbID)}>Delete</button></li>;
                })}
            </ul>
            <button onClick={handleSaving} type="button" disabled={!listName} className="favorites__save">Сохранить список</button>
            <hr />
            <button className="favorites__remove" onClick={handleRemoveListsName}>Clear</button>
            <div className='lists'>
                <ul>
                    {savedLists.map((item) => (
                        <li key={item.id}>
                            <a href={`http://localhost:5173/list/${item.id}`}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}