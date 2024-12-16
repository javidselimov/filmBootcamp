import { useEffect, useState } from 'react';
import { removeMovie } from '../../redux/slices/FavoritesSlice';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	addToCreatedList,
	fetchCreatedList,
	removeFromCreatedList,
} from '../../redux/slices/createdList';
import PopUp from '../PopUp/PopUp';

const Favorites = () => {
	const { movies } = useSelector((state) => state.favorites);
	const { lists: createdList } = useSelector((state) => state.createdList);
	const [inputValue, setInputValue] = useState('Новый список');
	const [error, setError] = useState('');
	const [errorVisibility, setErrorVisibility] = useState(false);
	const dispatch = useDispatch();

	const [popUpVisible, setPopUpVisible] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [itemType, setItemType] = useState(null);

	const openPopUp = (item, type) => {
		setItemToDelete(item);
		setItemType(type);
		setPopUpVisible(true);
	};

	const handleConfirmDelete = () => {
		if (itemToDelete) {
			if (itemType === 'movie') {
				dispatch(removeMovie({ imdbID: itemToDelete.imdbID }));
			} else if (itemType === 'list') {
				dispatch(removeFromCreatedList(itemToDelete.id));
			}
			setPopUpVisible(false);
		}
	};

	const handleCancelDelete = () => {
		setPopUpVisible(false);
		setItemToDelete(null);
		setItemType(null);
	};

	const createList = async () => {
		const trimmedInput = inputValue.trim();
		const movieTitles = movies.map((movie) => movie.title);

		setErrorVisibility(false);
		setError('');

		if (
			trimmedInput &&
			!createdList.some((list) => list.title === trimmedInput)
		) {
			const duplicateList = createdList.some((list) => {
				const listMovieTitles = list.movies.map((movie) => movie.title);
				return (
					JSON.stringify(listMovieTitles.sort()) ===
					JSON.stringify(movieTitles.sort())
				);
			});

			if (duplicateList) {
				setErrorVisibility(true);
				setError('A list with the same movies already exists!');
				return;
			}

			try {
				const response = await fetch(
					'https://acb-api.algoritmika.org/api/movies/list',
					{
						method: 'POST',
						headers: {
							'Content-type': 'application/json',
						},
						body: JSON.stringify({
							title: trimmedInput,
							movies: movies.map((movie) => ({
								imdbID: movie.imdbID,
								title: movie.title,
								year: movie.year,
							})),
						}),
					}
				);
				const data = await response.json();

				if (data.id) {
					dispatch(
						addToCreatedList({
							title: trimmedInput,
							id: data.id,
							movies: movies,
						})
					);
					setInputValue('');
					setErrorVisibility(false);
				} else {
					setErrorVisibility(true);
					setError('Failed to save the list');
				}
			} catch (error) {
				setErrorVisibility(true);
				setError('Error saving the list');
			}
		} else {
			setErrorVisibility(true);
			setError('The movie list name is either empty or already exists!');
		}
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="favorites">
			<input
				className="favorites__name"
				value={inputValue}
				onChange={handleChange}
			/>
			{errorVisibility && <p className="error">{error}</p>}

			<ul className="favorites__list">
				{movies.map((movie) => (
					<li key={movie.imdbID}>
						{movie.title} ({movie.year})
						<button
							type="button"
							onClick={() => openPopUp(movie, 'movie')}
							className="deleteButton"
						>
							X
						</button>
					</li>
				))}
			</ul>

			<button type="button" className="favorites__save" onClick={createList}>
				Сохранить список
			</button>

			<div className="created-list">
				<ul>
					{createdList.map((list) => (
						<li key={list.id}>
							<Link to={`/list/${list.id}`} target='_blank'>{list.title}</Link>
							<button
								type="submit"
								className="deleteButton"
								onClick={() => openPopUp(list, 'list')}
							>
								X
							</button>
						</li>
					))}
				</ul>
			</div>

			{popUpVisible && (
				<PopUp
					message={`Are you sure you want to delete "${itemToDelete?.title}"?`}
					onConfirm={handleConfirmDelete}
					onCancel={handleCancelDelete}
					type={itemType}
				/>
			)}
		</div>
	);
};

export default Favorites;
