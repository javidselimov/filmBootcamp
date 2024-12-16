import { createStore, combineReducers } from 'redux';
import movieReducer from './reducers/movieReducer';
import listReducer from './reducers/listReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  lists: listReducer,
});

const store = createStore(rootReducer);

export default store;
