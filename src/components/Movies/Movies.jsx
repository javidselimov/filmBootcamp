import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useSelector } from 'react-redux';

const Movies = () => {
	const { movies } = useSelector((state) => state.movies);
	return (
		<div className="movies-div-container">
			<ul className="movies">
				{Array.isArray(movies) &&
					movies.length > 0 &&
					movies.map((movie) => (
						<li className="movies__item" key={movie.imdbID}>
							<MovieItem {...movie} />
						</li>
					))}
			</ul>
		</div>
	);
};

export default Movies;
