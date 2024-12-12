import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

const ListPage = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [addedMovies, setAddedMovies] = useState([]);

  useEffect(() => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.json())
      .then((data) => setList(data));

    const storedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
    setAddedMovies(storedMovies);
  }, [id]);

  const addMovieToList = (movie) => {
    const updatedMovies = [...addedMovies, movie];
    setAddedMovies(updatedMovies);
    localStorage.setItem('addedMovies', JSON.stringify(updatedMovies));
  };

  if (!list) return <div>Loading...</div>;

  return (
    <div className="list-page">
      <h1 className="list-page__title">{list.title}</h1>
      <ul>
        {list.movies.map((imdbID) => (
          <li key={imdbID}>
            <a
              href={`https://www.imdb.com/title/${imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {imdbID}
            </a>
          </li>
        ))}
      </ul>
      <h2>Added Movies:</h2>
      <ul>
        {addedMovies.map((movie, index) => (
          <li key={index}>
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {movie.title} ({movie.year})
            </a>
          </li>
        ))}
      </ul>
      <button onClick={() => addMovieToList({ title: 'Inception', imdbID: 'tt1375666', poster: 'https://example.com/inception.jpg', year: '2010' })}>Add Movie</button>
    </div>
  );
};

export default ListPage;

