export const addToList = (movie) => ({
    type: 'ADD_TO_LIST',
    payload: movie,
  });
  
  export const removeFromList = (movie) => ({
    type: 'REMOVE_FROM_LIST',
    payload: movie,
  });
  
  export const saveList = (list) => ({
    type: 'SAVE_LI+ST',
    payload: list,
  });
  
  export const setSelectedList = (listName) => ({
    type: 'SET_SELECTED_LIST',
    payload: listName,
  });
  