import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/movieSlice";
import listSlice from "../slices/listSlice";
import listsSlice from "../slices/listsSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    list: listSlice,
    lists: listsSlice,
  },
});
