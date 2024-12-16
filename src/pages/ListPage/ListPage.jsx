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
    </div>
  );


};
export default ListPage;





// }
// } catch (error) {
//   console.error('API sorğusu zamanı xəta:', error);
// }
// };

// return (
// <div className="search-box">
//   <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
//     <label className="search-box__form-label">
//       Искать фильм по названию:
//       <input
//         value={searchLine}
//         type="text"
//         className="search-box__form-input"
//         placeholder="Например, Shawshank Redemption"
//         onChange={searchLineChangeHandler}
//       />
//     </label>
//     <button
//       type="submit"
//       className="search-box__form-submit"
//       disabled={!searchLine}
//     >
//       Искать
//     </button>





