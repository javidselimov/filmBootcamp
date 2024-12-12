import { createSlice } from '@reduxjs/toolkit';

const initialState={
    movies: [],
    filtered:[],
    title: 'Новый список',
    listItem: []
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies:(state,action)=>{
            state.movies=action.payload
        },
        setFiltered:(state,action)=>{
            state.filtered=action.payload
        },
        removeFromList:(state, action)=> {
            state.movies = state.movies.filter(
                (movie) => movie.imdbID !== action.payload.imdbID
            );
        },
        addTolist:(state,action)=>{
            state.listItem=action.payload
        }
    },
});

export const { setMovies, setFiltered, addTolist, removeFromList } = movieSlice.actions;
export default movieSlice.reducer;
