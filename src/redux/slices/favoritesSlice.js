import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	movies: [],
};
export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addMovie: (state, action) => {
			const existingMovie = state.movies.find(
				(movie) => movie.imdbID === action.payload.imdbID
			);
			if (!existingMovie) {
				state.movies.push(action.payload);
			}
		},
		removeMovie: (state, action) => {
			state.movies = state.movies.filter(
				(movie) => movie.imdbID !== action.payload.imdbID
			);
		},
	},
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
