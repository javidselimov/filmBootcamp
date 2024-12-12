import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../app/feautures/movies/moviesSlice'
import favoritesSlice from '../app/feautures/favorites/favoritesSlice'
export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    favorites: favoritesSlice
  },
})
export default store