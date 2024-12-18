import { createSlice } from "@reduxjs/toolkit";
const initial = {
    title: "My favorites",
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
            state.movies = [...action.payload]
        },
        resetMovie:(state)=>{
            state.title = 'My favorites';
            state.movies = []
        }
    },
});

export const { setTitle, saveMovie, deleteMovie, resetMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;

