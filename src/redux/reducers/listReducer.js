const initialState = {
    savedLists: [],
    addedMovies: [],
    selectedList: '',
    isListSaved: false,
  };
  
  const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_LIST':
        return { ...state, addedMovies: [...state.addedMovies, action.payload] };
  
      case 'REMOVE_FROM_LIST':
        return {
          ...state,
          addedMovies: state.addedMovies.filter(
            (movie) => movie.imdbID !== action.payload.imdbID
          ),
        };
  
      case 'SAVE_LIST':
        return {
          ...state,
          savedLists: [...state.savedLists, action.payload],
          isListSaved: true,
        };
  
      case 'SET_SELECTED_LIST':
        return { ...state, selectedList: action.payload };
  
      default:
        return state;
    }
  };
  
  export default listReducer;
  