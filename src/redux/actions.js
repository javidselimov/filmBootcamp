
import { getListIntoState, getMovieInfo, registerFavorites, searchMovie } from "./movieSlice";

let globalMovies = []; 

export const fetchMovies = (name) => {
  return async function (dispatch) {
    const api_key = 'd015cdec';
    if (globalMovies.length > 0 && globalMovies.some(movie => movie.name === name)) {
      dispatch(searchMovie(globalMovies.find(movie => movie.name === name).movies));
      return;
    }

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=${api_key}`);
      const data = await response.json();
      if (data.Search) {
        globalMovies.push({ name, movies: data.Search });
        dispatch(searchMovie(data.Search));
      } else {
        console.error("No movies found:", data.Error);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};

export const postList = (title, favoritesIDArr) => {
  return async function (dispatch) {
    const saved = {
      title: title,
      movies: favoritesIDArr
    };
    try {
      const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(saved),
      });
      const data = await response.json();
      dispatch(registerFavorites(data.id));
    } catch (error) {
      console.error("Error posting list:", error);
    }
  };
};

let globalLists = {}; 

export const getList = (id) => {
  return async function (dispatch) {
   
    if (globalLists[id]) {
      dispatch(getListIntoState(globalLists[id]));
      dispatch(getMovieInfoByImdbID(globalLists[id].movies));
      return;
    }

    try {
      const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`);
      const data = await response.json();
      globalLists[id] = { title: data.title, movies: data.movies };
      dispatch(getListIntoState(globalLists[id]));
      dispatch(getMovieInfoByImdbID(data.movies));
    } catch (error) {
      console.error("Error fetching list:", error);
    }
  };
};


export const getMovieInfoByImdbID = (movies) => {
  return async function (dispatch) {
    const api_key = 'd015cdec';
    try {
      const fetchPromises = movies.map((imdbID) => {
        const cachedMovie = globalMovies.find(movie => movie.imdbID === imdbID);
        if (cachedMovie) {
          return Promise.resolve(cachedMovie);
        }
        return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${api_key}`)
          .then((res) => res.json())
          .then((data) => {
            globalMovies.push(data); 
            return data;
          });
      });
      const movieDetailsArray = await Promise.all(fetchPromises);
      dispatch(getMovieInfo(movieDetailsArray));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
};
