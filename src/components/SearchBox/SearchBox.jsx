import { setSearchLine } from '../../redux/slices/searchLineSlice';
import {
	clearMovies,
	fetchMoviesList,
} from '../../redux/slices/moviesDataSlice';
import './SearchBox.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
	const searchLine = useSelector((state) => state.search.value);
	const dispatch = useDispatch();

	const searchLineChangeHandler = (e) => {
		dispatch(setSearchLine(e.target.value));
	};
	const searchBoxSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchMoviesList(searchLine));
		// dispatch(clearMovies());
	};

	return (
		<div className="search-box">
			<form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
				<label className="search-box__form-label">
					Искать фильм по названию:
					<input
						value={searchLine}
						type="text"
						className="search-box__form-input"
						placeholder="Например, Shawshank Redemption"
						onChange={searchLineChangeHandler}
					/>
				</label>
				<button
					type="submit"
					className="search-box__form-submit"
					disabled={!searchLine}
				>
					Искать
				</button>
			</form>
		</div>
	);
};

export default SearchBox;
