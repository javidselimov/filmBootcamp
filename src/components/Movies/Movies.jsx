import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';

const Movies = () => {
	const { movies, loading, error } = useSelector((state) => state.movies);
	// console.log(movies);
	return (
		<div className="movies-div-container">
			<ul className="movies">
				{Array.isArray(movies) && movies.length > 0 ? (
					movies?.map((movie) => (
						<li className="movies__item" key={movie.imdbID}>
							<MovieItem {...movie} />
						</li>
					))
				) : (
					<p>No movies found.</p>
				)}
			</ul>
		</div>
	);
};

export default Movies;
