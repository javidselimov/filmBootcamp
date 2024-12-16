import { createSlice } from "@reduxjs/toolkit";
import { addToList } from "../../movies/list";

const initialState = {
  list: {
    title: "",
    movies: [],
  },
  loading: false,
  error: null,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    deleteFromList: (state, action) => {
      const filteredMovies = state.list.movies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      state.list.movies = filteredMovies;
    },
    clearList: (state) => {
      state.list.title = "";
      state.list.movies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToList.fulfilled, (state, action) => {
        state.loading = false;
        const existingMovie = state.list.movies.find(
          (movie) => movie.imdbID === action.payload.imdbID
        );
        if (!existingMovie) {
          state.list.movies.push(action.payload);
        } else {
          state.error = "Movie already in the list.";
        }
      })
      .addCase(addToList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { deleteFromList, clearList } = listSlice.actions;
export default listSlice.reducer;
