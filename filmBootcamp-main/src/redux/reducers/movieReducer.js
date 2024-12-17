const initialState = {
    searchQuery: 'monster',
    resultData: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return { ...state, searchQuery: action.payload };
  
      case 'SET_RESULT_DATA':
        return { ...state, resultData: action.payload };
  
      default:
        return state;
    }
  };
  
  export default movieReducer;
  