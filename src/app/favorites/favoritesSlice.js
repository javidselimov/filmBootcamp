import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    title: "",
    movies: [

    ]
}


const favoritesSlice = createSlice({
    name: "favorite",
    initialState: initialState,
    reducers: {
        setTitle: () => {
            
        },
        saveMovie: (state, action) => {
            state.value.push(action.payload)
        },
        deleteMovie: (state, id) => {
            state.value = state.value.filter((item) => item.id !== id);
        }
    }
})

export const { saveMovie, deleteMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;