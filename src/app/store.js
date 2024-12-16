import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});