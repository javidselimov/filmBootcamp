import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../app/feautures/movies/moviesSlice'
import favoritesSlice from '../app/feautures/favorites/favoritesSlice'
import listIdSlice from "../app/feautures/listId/listIdSlice"
export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    favorites: favoritesSlice,
    ids: listIdSlice,
  },
})
export default store