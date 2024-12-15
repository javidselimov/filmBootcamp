import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'; 
import './ListPage.css';

const ListPage = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [addedMovies, setAddedMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const apiKey = '23ef1119'; 

  useEffect(() => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.json())
      .then((data) => setList(data));
    const storedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
    setAddedMovies(storedMovies);
  }, [id]);
  
  const fetchMovieDetails = (imdbID) => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails((prevDetails) => ({
          ...prevDetails,
          [imdbID]: data, 
        }));
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  };

  useEffect(() => {
    if (list) {
      list.movies.forEach((imdbID) => {
        if (!movieDetails[imdbID]) {
          fetchMovieDetails(imdbID);
        }
      });
    }
  }, [list, movieDetails]);

  const addMovieToList = (movie) => {
    const updatedMovies = [...addedMovies, movie];
    setAddedMovies(updatedMovies);
    localStorage.setItem('addedMovies', JSON.stringify(updatedMovies));
  };

  const removeMovieFromList = (imdbID) => {
    const updatedMovies = addedMovies.filter((movie) => movie.imdbID !== imdbID);
    setAddedMovies(updatedMovies);
    localStorage.setItem('addedMovies', JSON.stringify(updatedMovies));
  };

  const handleReturnToMainPage = () => {
    window.location.href = '/';
  };

  if (!list) return <div>Loading...</div>;

  return (
    <div className="list-page">
      <Header />
      <h1 className="list-page__title">{list.title}</h1>
      
      <h2>Movies in List:</h2>
      <ul>
        {list.movies.map((imdbID) => {
          const movie = movieDetails[imdbID];

          return (
            <li key={imdbID}>
              {movie ? (
                <div>
                  <img
                    src={movie.Poster || "https://via.placeholder.com/150"}
                    alt={movie.Title}
                    width="100"
                    height="150"
                    style={{ marginRight: '10px' }}
                  />
                  <a
                    href={`https://www.imdb.com/title/${imdbID}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {movie.Title} ({movie.Year})
                  </a>
                </div>
              ) : (
                <div>Loading movie details...</div>
              )}
            </li>
          );
        })}
      </ul>

      <h2>Added Movies:</h2>
      <ul>
        {addedMovies.map((movie, index) => (
          <li key={index}>
            <div>
              <img
                src={movie.poster || "https://via.placeholder.com/150"}
                alt={movie.title}
                width="100"
                height="150"
                style={{ marginRight: '10px' }}
              />
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {movie.title} ({movie.year})
              </a>
            </div>
            <button
              onClick={() => removeMovieFromList(movie.imdbID)}
              className="movie-item__remove-button"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleReturnToMainPage} className="favorites__save">
        Вернуться на сайт
      </button>
    </div>
  );
};

export default ListPage;
