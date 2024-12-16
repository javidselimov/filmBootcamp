
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie, setTitle, resetValue } from '../../app/favorites/favoritesSlice';
import { setList } from '../../app/listId/listIdSlice';


const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    const deleteMovie = (id) => {
        const filteredMovies = favorites.movies.filter((movie) => movie.imdbID !== id);
        dispatch(updateMovie(filteredMovies))
    }

    const saveMovieList = () => {
        const url = "https://acb-api.algoritmika.org/api/movies/list";

        if (favorites.movies.length) {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(favorites),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
                .then((result) => {
                    const { id, title } = result;
                    dispatch(setList({ id, title }))
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }

        dispatch(resetValue())
    }

    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
    }

    return (
        <div className="favorites">
            <input value={favorites.title} onChange={(e) => handleTitleChange(e)} className="favorites__name" />
            <ul className="favorites__list">
                {favorites.movies.map((item) => {
                    return <div className="favorite-list" key={item.imdbID}>
                        <li key={item.imdbID}>{item.Title} ({item.Year})</li>
                        <button className='delete-item-btn' onClick={() => deleteMovie(item.imdbID)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg></button>
                    </div>;
                })}
            </ul>
            <button type="button" className="favorites__save" onClick={() => saveMovieList()}>Сохранить список</button>
            {list.list.length > 0 ? <div className='favorites-list'>
                <ul key={list.id}>
                    {list.list.map((item) => {
                        return <li key={item.id}><a href={`/list/${item.id}`} target='_blank'>{item.title}</a></li>
                    })}
                </ul>
            </div> : <></>}
        </div>
    );

}

export default Favorites;