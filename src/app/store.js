import { configureStore } from "@reduxjs/toolkit";
import movieSlice  from "./movies/movieSlice";
import favoritesSlice from "../app/favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        movies: movieSlice,
        favorites: favoritesSlice,
    }
})