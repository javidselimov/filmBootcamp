
import { useDispatch, useSelector } from 'react-redux';
import './MovieItem.css';
import { addFavoriteFilm } from '../../redux/movieSlice';

const MovieItem = (props)=>{
    
    const { Title: title, Year: year, Poster: poster, imdbID } = props;

  const favoriteList = useSelector((state)=>state.movies.favoriteList)
  const dispatch = useDispatch();
        
  const ifIdInFavorites = ()=>{
    return favoriteList.find((item)=>item.imdbID === imdbID)
  };
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={()=>dispatch(addFavoriteFilm({id:imdbID}))} disabled={ifIdInFavorites(imdbID)}>
                    {ifIdInFavorites(imdbID) ? `✓` : "Добавить в список"}
                        </button>
                </div>
            </article>
        );
    }

 
export default MovieItem;