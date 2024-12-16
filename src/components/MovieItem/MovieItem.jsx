import './MovieItem.css';
import Favorites from '../Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/slices/FavoritesSlice';
const MovieItem = ({ title, year, poster, imdbID }) => {
	const dispatch = useDispatch();
	const addToList = () => {
		const movies = {
			imdbID,
			title,
			year,
			poster,
		};
		dispatch(addMovie(movies));
	};
	return (
		<article className="movie-item">
			<img className="movie-item__poster" src={poster} alt={title} />
			<div className="movie-item__info">
				<h3 className="movie-item__title">
					{title}&nbsp;({year})
				</h3>
				<button
					type="button"
					className="movie-item__add-button"
					onClick={addToList}
				>
					Добавить в список
				</button>
			</div>
		</article>
	);
};

export default MovieItem;
