import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/moviesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
  },
});