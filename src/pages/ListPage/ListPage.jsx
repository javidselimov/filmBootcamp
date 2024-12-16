import { useDispatch, useSelector } from 'react-redux';
import './ListPage.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCreatedList } from '../../redux/slices/createdList';

const ListPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const createdList = useSelector((state) => state.createdList.lists);
	const list = createdList.find((list) => list.id === id);

	useEffect(() => {
		if (!list) {
			dispatch(fetchCreatedList(id));
		}
	}, [dispatch, id, list]);

	return (
		<div className="list-page">
			<h1 className="list-page__title">
				My List: {list ? list.title : 'Loading...'}
			</h1>
			<ul>
				{list && list.movies ? (
					list.movies.map((movie) => (
						<li key={movie.imdbID}>
							<a
								href={`https://www.imdb.com/title/${movie.imdbID}/`}
								target="_blank"
								rel="noopener noreferrer"
							>
								{movie.title} ({movie.year})
							</a>
						</li>
					))
				) : (
					<p>Loading movies...</p>
				)}
			</ul>
		</div>
	);
};

export default ListPage;
