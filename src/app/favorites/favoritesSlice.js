import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    movies: [
        // { imdbID: 'tt0068646', Title: 'The Godfather', Year: 1972 }
    ]
}


const favoritesSlice = createSlice({
    name: "favorite",
    initialState: initialState,
    reducers: {
        setTitle: (state, action) => {
            state.movies = action.payload.title;
        },
        saveMovie: (state, action) => {
            state.movies = [...state.movies, action.payload];
        },
        updateMovie: (state, action) => {
            state.movies = [...action.payload]
        },
    }
})

export const { saveMovie, updateMovie, setTitle } = favoritesSlice.actions;
export default favoritesSlice.reducer;