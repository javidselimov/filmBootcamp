// import React, { useState, useEffect } from 'react';
// import './ListPage.css';
// import { useParams } from 'react-router-dom';

// const ListPage = ({ match }) => {
//     const [movies, setMovies] = useState([
//         { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
//     ]);
// const params=useParams()

//     useEffect(() => {
//         const id = params.id;
//         console.log(id);
//         // TODO: запрос к серверу на получение списка
//         // TODO: запросы к серверу по всем imdbID
//     }, []);

//     return (
//         <div className="list-page">
//             <h1 className="list-page__title">Мой список</h1>
//             <ul>
//                 {movies.map((item) => (
//                     <li key={item.imdbID}>
//                         <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank" rel="noopener noreferrer">
//                             {item.title} ({item.year})
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ListPage;


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

const ListPage = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.json())
      .then((data) => setList(data));
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
    </div>
  );
};

export default ListPage;
