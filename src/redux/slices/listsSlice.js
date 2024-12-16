import { createSlice } from "@reduxjs/toolkit";
import { addToList, getList } from "../../movies/lists";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteList: (state, action) => {
      const filteredList = state.lists.filter(
        (list) => list.id !== action.payload
      );
      state.lists = filteredList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToList.fulfilled, (state, action) => {
        const existingIndex = state.lists.findIndex(
          (list) => list.id === action.payload.id
        );

        if (existingIndex !== -1) {
          state.lists[existingIndex] = {
            ...state.lists[existingIndex],
            ...action.payload,
          };
        } else {
          state.lists.push(action.payload);
        }
      })
      .addCase(getList.fulfilled, (state, action) => {
        const existingIndex = state.lists.findIndex(
          (list) => list.id === action.payload.id
        );

        if (existingIndex === -1) {
          state.lists.push(action.payload);
        }
      });
  },
});
export const { deleteList } = listsSlice.actions;
export default listsSlice.reducer;
