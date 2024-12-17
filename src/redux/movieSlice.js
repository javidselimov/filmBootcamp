import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    favoriteList:[],
    title:'',
    listId:'',
    listMovies:[],
    movieDetails:[],
   

}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        searchMovie(state,action){
            state.movies = action.payload
        },

        addFavoriteFilm(state,action){
            const id = action.payload.id;
            const match = state.movies.find((movie)=>movie.imdbID === id)

            if(match && !state.favoriteList.find((movie)=>movie.imdbID === id)){
               state.favoriteList.push({...match})
            }
        },
        removeMovieFromFavoriteList(state, action) {
            const id = action.payload.id;
            state.favoriteList = state.favoriteList.filter((movie) => movie.imdbID !== id);
        },
        

        registerFavorites(state,action){
            state.listId = action.payload
        },
        getListIntoState(state,action){
            state.title = action.payload.title;
            state.listMovies = action.payload.movies;
        },
        
        getMovieInfo(state,action){
            state.movieDetails = action.payload
        }

        
       
    }
  
})
export const {
    searchMovie,addFavoriteFilm,removeMovieFromFavoriteList,registerFavorites, getListIntoState,getMovieInfo
} = movieSlice.actions;                                                                             

export default movieSlice.reducer