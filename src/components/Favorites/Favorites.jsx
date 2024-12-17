
import { useState, useEffect } from 'react'; 
import './Favorites.css'; 
import { Link } from 'react-router-dom'; 
import { removeMovieFromFavoriteList } from '../../redux/movieSlice'; 
import { postList } from '../../redux/actions'; 
import { useSelector, useDispatch } from 'react-redux'; 

const Favorites = () => {
  const [title, setTitle] = useState('MyFavorites');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentList, setCurrentList] = useState('');
  const [lists, setLists] = useState([]);
  const dispatch = useDispatch();


  const favoriteList = useSelector((state) => state.movies.favoriteList);
  const listId = useSelector((state) => state.movies.listId);

 
  useEffect(() => {
    const savedLists = localStorage.getItem('favoriteLists');
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    }
  }, []);

  
  useEffect(() => {
    if (lists.length > 0) {
      localStorage.setItem('favoriteLists', JSON.stringify(lists));
    }
  }, [lists]);

 
  const addToCurrentList = (movie) => {
    const updatedLists = lists.map((list) => {
      if (list.title === currentList) {
        if (!list.movies.some((item) => item.imdbID === movie.imdbID)) {
          return { ...list, movies: [...list.movies, movie] };
        }
      }
      return list;
    });
    setLists(updatedLists);
  };

 
  const removeFromCurrentList = (imdbID) => {
    const updatedLists = lists.map((list) => {
      if (list.title === currentList) {
        return {
          ...list,
          movies: list.movies.filter((movie) => movie.imdbID !== imdbID),
        };
      }
      return list;
    });
    setLists(updatedLists);
  };


  const createListHandler = () => {
    if (!title.trim()) {
      alert('Название списка обязательно!');
      return;
    }
    if (lists.some((list) => list.title === title)) {
      alert('Список с таким названием уже существует!');
      return;
    }
    const newList = { title, movies: [] };
    setLists([...lists, newList]);
    setCurrentList(title);
    setTitle('');
  };


  const saveListHandler = () => {
    if (!currentList || lists.find((list) => list.title === currentList)?.movies.length === 0) {
      alert('Список должен содержать фильмы для сохранения!');
      return;
    }
    setIsSubmitted(true);
    const favoritesIDArr = lists.find((list) => list.title === currentList).movies.map((movie) => movie.imdbID);
    dispatch(postList(currentList, favoritesIDArr));
  };

  const removeFromFavorites = (imdbID) => {
    dispatch(removeMovieFromFavoriteList({ id: imdbID }));
  };

  return (
    <div className="favorites">
    
      <div className="favorites__header">
        <input
          name="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="favorites__name"
          placeholder="Название нового списка"
          disabled={isSubmitted || !currentList}
        />
        <button
          type="button"
          onClick={createListHandler}
          className="favorites__create"
          disabled={isSubmitted}
        >
          Создать список
        </button>
      </div>

     
      <div className="favorites__select-container">
        <select
          value={currentList}
          onChange={(e) => setCurrentList(e.target.value)}
          className="favorites__select"
          disabled={isSubmitted}
        >
          <option value="" disabled>
            Выберите список
          </option>
          {lists.map((list) => (
            <option key={list.title} value={list.title}>
              {list.title}
            </option>
          ))}
        </select>
      </div>

   
      <ul className="favorites__list">
        {favoriteList.map((item) => (
          <li key={item.imdbID}>
            <button
              className="add-to-list"
              onClick={() => addToCurrentList(item)}
              disabled={isSubmitted}
            >
              Добавить
            </button>
            <button
              className="remove-favorite-movie"
              onClick={() => removeFromFavorites(item.imdbID)} 
              disabled={isSubmitted}
            >
              Удалить
            </button>
            {item.Title} - ({item.Year})
          </li>
        ))}
      </ul>

      
      {currentList && (
        <div>
          <h3>Фильмы в списке: {currentList}</h3>
          <ul>
            {lists
              .find((list) => list.title === currentList)
              ?.movies.map((movie) => (
                <li key={movie.imdbID}>
                  <button
                    className="remove-from-list"
                    onClick={() => removeFromCurrentList(movie.imdbID)} 
                    disabled={isSubmitted}
                  >
                    Удалить из списка
                  </button>
                  {movie.Title} - ({movie.Year})
                </li>
              ))}
          </ul>
        </div>
      )}

    
      {currentList && !isSubmitted ? (
        <button className="favorites__save" onClick={saveListHandler}>
          Сохранить список
        </button>
      ) : (
        isSubmitted && (
          <button className="favorites__save">
            <Link to={`/list/${listId}`} className="link-to__list">
              Перейти к списку
            </Link>
          </button>
        )
      )}
    </div>
  );
};

export default Favorites;
