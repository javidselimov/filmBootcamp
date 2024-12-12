import { createSlice } from "@reduxjs/toolkit";
const initial = {
    title: "New list",
    movies: [
        { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        
    ]
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initial,
    reducers: {
        setTitle:(action)=>{
            state.title = action.payload;
        },
        saveMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter((item) => item.id !== action.payload);
        }
    },
});

export const { saveMovie, deleteMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;

