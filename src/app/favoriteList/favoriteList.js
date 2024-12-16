import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: 'My Favorites',
    movies: []
}


const favoritesSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {    }
})

export const { } = favoritesSlice.actions;
export default favoritesSlice.reducer;