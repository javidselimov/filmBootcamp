import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMovies: [],
  searchResults: [], // əlavə olaraq axtarış nəticələrini saxlayırıq
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    addMovieToList(state, action) {
      state.selectedMovies.push(action.payload);
    },
    clearSelectedMovies(state) {
      state.selectedMovies = [];
    },
  },
});

export const { setSearchResults, addMovieToList, clearSelectedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
