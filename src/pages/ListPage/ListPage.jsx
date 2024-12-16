import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ListPage.css";
import { getList } from "../../movies/lists";
import { BASE_URL } from "../../movies";

const ListPage = () => {
  const { id } = useParams();
  const { lists } = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const [current, setCurrent] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(getList(id));
    }
  }, [id, dispatch]);

  const currentList = lists.find((item) => item.id === id);

  useEffect(() => {
    if (currentList && currentList.movies) {
      Promise.all(
        currentList.movies.map((movieId) =>
          fetch(`${BASE_URL}i=${movieId}&`)
            .then((res) => res.json())
            .catch((error) => console.error("Failed to fetch movie:", error))
        )
      ).then((movies) => setCurrent(movies));
    }
  }, [currentList]);

  return (
    <div className="list-page">
      <h1 className="list-page__title">
        {currentList ? currentList.title : "Loading..."}
      </h1>

      {current && current.length > 0 && (
        <ul>
          {current.map((movie) => (
            <li key={movie.imdbID}>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {movie.Title} ({movie.Year})
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPage;
