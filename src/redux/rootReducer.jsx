import { combineReducers } from "redux";
import favoriteReducer from "./favoriteMovies/favoriteReducer";
import movieReducer from "./movies/movieReducer";
const rootReducer = combineReducers({ movieReducer, favoriteReducer });

export default rootReducer;


