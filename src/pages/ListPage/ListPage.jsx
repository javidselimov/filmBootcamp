import { useEffect, useState } from "react";
import "./ListPage.css";
import "../../components/MovieItem/MovieItem.css";
import { useParams } from "react-router-dom";

export default function ListPage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(
          `https://acb-api.algoritmika.org/api/movies/list/${id}`
        );
        if (!response.ok) {
          throw new Error("List not found. Error...");
        }
        const data = await response.json();
        setTitle(data.title);
        const movieDetails = await Promise.all(
          data.movies.map(async (imdbID) => {
            const movieResponse = await fetch(
              `https://www.omdbapi.com/?i=${imdbID}&apikey=73c0f3`
            );
            return movieResponse.json();
          })
        );
        setMovies(movieDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="list-page">
      <h1 className="list-page__title">Movie List Title: {title}</h1>
      <div className="movie-list">
        {movies.map(({ imdbID, Title, Year, Poster }) => (
          <article key={imdbID} className="movie-item">
            <img
              className="movie-item__poster"
              src={Poster ? Poster : ""}
              alt={Title}
            />
            <div className="movie-item__info">
              <h3 className="movie-item__title">
                {Title}&nbsp;({Year})
              </h3>
              <a
                href={`https://www.imdb.com/title/${imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDB Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
