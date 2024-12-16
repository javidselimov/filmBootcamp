import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from ".";

export const addToList = createAsyncThunk(
  "list/addToList",
  async (imdbID, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}i=${imdbID}&`);
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
