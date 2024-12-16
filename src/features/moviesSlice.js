import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  filtered: [],
  title: '',
  favouriteMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
        state.movies = action.payload;
    },
    setFiltered: (state, action) => {
        state.filtered = action.payload;
    },
    setTitle: (state, action) => {
        state.title = action.payload;
    },
    setFavorites: (state, action) => {
      state.favouriteMovies = action.payload;
    },
    addFavoriteMovie: (state, action) => {
      if (!state.favouriteMovies.find(movie => movie.imdbID === action.payload.imdbID)) {
        state.favouriteMovies=[...state.favouriteMovies, action.payload];
      }
    },
    removeFavoriteMovie: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(movie => movie.imdbID !== action.payload);
    }
  },
});

export const { setMovies, setFiltered, setTitle, setFavorites, addFavoriteMovie, removeFavoriteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;