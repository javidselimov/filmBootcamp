import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [
        {
            "imdbID": "tt3774114",
            "Title": "Snowden",
            "Year": "2016",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzYzNzgzOF5BMl5BanBnXkFtZTgwOTg4NzQ4OTE@._V1_SX300.jpg"
        },
        {
            "imdbID": 'tt3896198',
            "Title": "Guardians of the Galaxy Vol. 2",
            "Year": 2017,
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

        },
        {
            "imdbID": 'tt0068646',
            "Title": "The Godfather",
            "Year": 1972,
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

        },

    ]
}


const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        getMovies: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;
