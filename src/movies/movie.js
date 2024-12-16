import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from ".";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}s=${searchTerm}&`);
      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
