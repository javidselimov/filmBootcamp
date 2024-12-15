import { configureStore } from '@reduxjs/toolkit';
import searchLineReducer from '../slices/searchLineSlice';
import moviesDataReducer from '../slices/moviesDataSlice';
import favoritesReducer from '../slices/FavoritesSlice';
import createdListReducer from '../slices/createdList'


export default configureStore({
	reducer: {
		search: searchLineReducer,
		movies: moviesDataReducer,
		favorites: favoritesReducer,
		createdList: createdListReducer
	},
});
