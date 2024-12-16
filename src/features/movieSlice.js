import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    filtered: [],
    listItem: [],
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setFiltered: (state, action) => {
            state.filtered = action.payload;
        },
        addTolist: (state, action) => {
            state.listItem = [...state.listItem, action.payload];
        },
        removeFromList: (state, action) => {
            if (!action.payload) return;
            state.listItem = state.listItem.filter((movie) => movie.imdbID !== action.payload);
        },
        saveList: (state, action) => {
            state.savedId = action.payload;
        }
    }
});

export const { setMovies, setFiltered, addTolist, removeFromList, saveList } = movieSlice.actions;
export default movieSlice.reducer;

