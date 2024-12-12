import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch('https://www.omdbapi.com/?s=godfather&apikey=3f1a9991');
        const data = await response.json();
        return data.Search; 
    }
);
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
    },
    reducers: {
        addToList(state) {
            state.movies.push(action.payload);
        },
        removeFromList(state, action) {
            state.movies = state.movies.filter(
                (movie) => movie.imdbID !== action.payload.imdbID
            );
        },
    },
});

export const { addToList, removeFromList } = movieSlice.actions;
export default movieSlice.reducer;
