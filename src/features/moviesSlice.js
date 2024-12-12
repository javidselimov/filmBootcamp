import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  filtered: [],
  imdbIDValue: [],
  title: '',
  favouriteMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
        state.movies = action.payload;
        // state.movies.push(action.payload);
    },
    setFiltered: (state, action) => {
        state.filtered = action.payload;
    },
    setImdbIDValue: (state, action) => {
        state.imdbIDValue = action.payload;
    },
    setTitle: (state, action) => {
        state.title = action.payload;
    },
    setFavorites: (state, action) => {
      state.favouriteMovies = action.payload;
    },
    addFavoriteMovie: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFavoriteMovie: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(movie => movie.imdbID !== action.payload);
    }
  },
});

export const { setMovies, setFiltered, setImdbIDValue, setTitle, setFavorites, addFavoriteMovie, removeFavoriteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;