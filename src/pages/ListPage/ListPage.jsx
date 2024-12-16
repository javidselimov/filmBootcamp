import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

const ListPage = () => {
  const { id } = useParams(); 
  const [list, setList] = useState(null);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`);
        const data = await response.json();
        setList(data);

        const moviePromises = data.movies.map(async (movieId) => {
          const res = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=665e9dcf`);
          const movieData = await res.json();
          return {
            id: movieId,
            title: movieData.Title || movieId, 
          };
        });

        const movieDetails = await Promise.all(moviePromises);
        setMovieDetails(movieDetails);

      } catch (error) {
        console.error('Siyahını əldə etmək mümkün olmadı', error);
      }
    };

    fetchList();
  }, [id]);

  if (!list || !movieDetails.length) {
    return <p>Yüklənir...</p>;
  }

  return (
    <div className="list-page">
      <h1>{list.title}</h1>
      <ul>
        {movieDetails.map((movie) => (
          <li key={movie.id}>
            <a
              href={`https://www.imdb.com/title/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {movie.title} ({movie.id})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
