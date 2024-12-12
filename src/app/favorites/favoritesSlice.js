import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: 'alkdalsjhdalkdlas',
    movies: [
        { imdbID: 'tt0068646', Title: 'The Godfather', Year: 1972 }
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
            state.movies.push(action.payload)
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter((item) => item.id !== action.payload.id);
        },
    }
})

export const { saveMovie, deleteMovie, setTitle } = favoritesSlice.actions;
export default favoritesSlice.reducer;