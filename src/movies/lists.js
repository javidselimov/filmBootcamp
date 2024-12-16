import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://acb-api.algoritmika.org/api/movies/list";

export const saveList = createAsyncThunk(
  "lists/saveList",
  async (updatedList, thunkAPI) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedList),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to save the list");
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getList = createAsyncThunk(
  "lists/getList",
  async (listId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://acb-api.algoritmika.org/api/movies/list/${listId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch lists");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
