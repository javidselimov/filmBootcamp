import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: 'My Favorites',
    movies: [
        // { imdbID: 'tt0068646', Title: 'The Godfather', Year: 1972 }
    ]
}


const favoritesSlice = createSlice({
    name: "favorite",
    initialState: initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        saveMovie: (state, action) => {
            state.movies = [...state.movies, action.payload];
        },
        updateMovie: (state, action) => {
            state.movies = [...action.payload]
        },
        resetValue: (state) => {
            state.title = 'My Favorites',
            state.movies = []
        }
    }
})

export const { saveMovie, updateMovie, setTitle, resetValue } = favoritesSlice.actions;
export default favoritesSlice.reducer;