
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
                    return <div key={item.imdbID}>
                        <li key={item.imdbID}>{item.Title} ({item.Year})</li>
                        <button onClick={() => deleteMovie(item.imdbID)}>Delete</button>
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