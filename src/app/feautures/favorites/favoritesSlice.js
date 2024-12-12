import { createSlice } from "@reduxjs/toolkit";
const initial = {
    title: "New list",
    movies: [
        { imdbID: 'tt0068646', Title: 'The Godfather', Year: 1973 }
        
    ]
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initial,
    reducers: {
        setTitle:(state, action)=>{
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

export const { setTitle, saveMovie, deleteMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;

