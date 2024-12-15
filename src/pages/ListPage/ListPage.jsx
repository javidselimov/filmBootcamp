// import React, { useState, useEffect } from 'react';
// import './ListPage.css';

// const ListPage = ({ match }) => {
//     const [movies, setMovies] = useState([
//         { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
//     ]);

//     useEffect(() => {
//         const id = match.params; 
//         console.log(id);
//         // TODO: серверге запросlar yerinə yetirilməlidir
//         // TODO: imdbID-lərə uyğun əlavə məlumatları çəkmək üçün API çağırışları
//     }, [match.params]); 

//     return (
//         <div className="list-page">
//             <h1 className="list-page__title">Мой список</h1>
//             <ul>
//                 {movies.map((item) => (
//                     <li key={item.imdbID}>
//                         <a 
//                             href={`https://www.imdb.com/title/${item.imdbID}/`} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                         >
//                             {item.title} ({item.year})
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ListPage;



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