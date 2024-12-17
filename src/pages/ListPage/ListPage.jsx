import { useEffect, useState } from 'react';
import './ListPage.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../redux/actions';
import Header from '../../components/Header/Header';

const ListPage = () => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const params = useParams();

    const title = useSelector((state) => state.movies.title);
    const movieDetails = useSelector((state) => state.movies.movieDetails);


    useEffect(() => {
        const id = params.id;
        if (id) {
            dispatch(getList(id));
        }
    }, [dispatch, params.id]);

  useEffect(() => {
        if (movieDetails && movieDetails.length > 0) {
            
            setMovies([...movieDetails].reverse());
          
        } else {
            setMovies([]); 
        }
    }, [movieDetails]);


    return (
        <div className="list-page">
            <Header />
            <h1 className="list-page__title">{title}</h1>
            <ul>
                {movies && movies.length > 0 ? (
                    movies.map((item) => (
                      
                      
                        <li key={item.imdbID}>
                            <img
                                src={item.Poster || 'default-poster.jpg'}
                                className="single-movie__poster"
                                alt={item.Title}
                            />
                            <div className="info">
                                <h3 className="movie-item__title">{item.Title}</h3>
                                <h4 className="movie-item__about">О фильме</h4>
                                <div className="list-page__details">
                                    <div className="list-page__details-title">Год производства</div>
                                    <div className="list-page__details-value">{item.Year}</div>
                                </div>
                                <div className="list-page__details">
                                    <div className="list-page__details-title">Страна</div>
                                    <div className="list-page__details-value">{item.Country}</div>
                                </div>
                                <div className="list-page__details">
                                    <div className="list-page__details-title">Жанр</div>
                                    <div className="list-page__details-value">{item.Genre}</div>
                                </div>
                                <a
                                    href={`https://www.imdb.com/title/${item.imdbID}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="list-page__link-imdb"
                                >
                                    See more on IMDb
                                </a>
                            </div>
                        </li>
                    ))
                ) : (
                    <p> Фильмы не найдены.</p>
                )}
            </ul>
        </div>
    );
};

export default ListPage;

