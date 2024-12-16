import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../index';
import { API_KEY } from '../index';

export const fetchMoviesList = createAsyncThunk(
	'movies/fetchMoviesList',
	async (searchLine, { rejectWithValue }) => {
		try {
			// ad a gore request

			const query = searchLine.startsWith('tt')
				? `i=${searchLine}`
				: `s=${searchLine}`;
			const response = await fetch(`${BASE_URL}?${query}&apikey=${API_KEY}`);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue('Failed to fetch data from API');
			}
			if (data.Response === 'True') {
				return data.Search
					? data.Search.map((movie) => ({
							imdbID: movie.imdbID,
							title: movie.Title,
							year: movie.Year,
							poster: movie.Poster,
					  }))
					: [
							{
								imdbID: data.imdbID,
								title: data.Title,
								year: data.Year,
								poster: data.Poster,
							},
					  ];
			} else {
				return rejectWithValue('No movies found.');
			}
		} catch (error) {
			return rejectWithValue(
				error.message || 'Error occured while fetching the movies'
			);
		}
	}
);

const initialState = {
	movies: [
		{
			imdbID: 'tt3896198',
			title: 'Guardians of the Galaxy Vol. 2',
			year: 2017,
			poster:
				'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
		},
		{
			imdbID: 'tt0068646',
			title: 'The Godfather',
			year: 1972,
			poster:
				'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
	],
	loading: false,
	error: null,
};

const moviesDataSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		clearMovies: (state) => {
			state.movies = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMoviesList.fulfilled, (state, action) => {
				state.loading = false;
				state.movies = Array.isArray(action.payload) ? action.payload : [];
			})
			.addCase(fetchMoviesList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { clearMovies } = moviesDataSlice.actions;
export default moviesDataSlice.reducer;
