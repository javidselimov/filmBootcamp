import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../slices/moviesSlice';  // moviesSlice import edilir

const store = configureStore({
  reducer: {
    movies: moviesReducer,  // movies reducer burada istifadə olunur
  },
});

export default store;
