import  {  useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, setFiltered, setTitle } from '../../features/moviesSlice';


export default function  Favorites() {
   const [state, setState] =  useState({
        // title: 'Новый список',
        // movies: [
        //     { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        // ]
    })

    const title = useSelector((state) => state.movies.title);
    const favMovies = useSelector((state) => state.movies.favouriteMovies);
    console.log(favMovies);
    const [titleInput, setTitleInput] = useState(title);
    const dispatch = useDispatch();

    const handleTitleChange = (e) => {
        setTitleInput(e.target.value);
        dispatch(setTitle(e.target.value));
        // console.log(e.target.value);
    }

    // const [state,setState]=useState({
    //     title: ''
    // })

    // const favoriteMovies = useSelector(state => state.movies.favoriteMovies);
    // const movies = useSelector(state => state.movies.movies);
    // const dispatch = useDispatch();

    // const handleTitleChange = (e) => {
    //     setState((p) => ({
    //         ...p, title: e.target.value
    //     }))
    // }

    // const { title } = setState;

    // const handleSave = () => {
    //     setFiltered.forEach(movie => {
    //         if (!favoriteMovies.find(fav => fav.imdbID === movie.imdbID)) {
    //             dispatch(addFavoriteMovie(movie));
    //         }
    //     })
    // }

    // const moviesToDisplay = setFiltered.length > 0 ? setFiltered : movies;

    return (
        <div className="favorites">
            {/* <input value="Новый список" className="favorites__name"/> */}
            <input value={title} className="favorites__name" onChange={handleTitleChange} />
            <ul className="favorites__list">
                {favMovies.map((item) => {
                    return <li key={item.imdbID}>{item.title} ({item.year})</li>;
                })}
                {/* {moviesToDisplay.map((item) => {
                    return <li key={item.imdbID}>{item.title} ({item.year})</li>;
                })} */}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    );
    
}