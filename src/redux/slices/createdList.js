import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCreatedList = createAsyncThunk(
	'created/fetchCreatedList',
	async () => {
		const response = await fetch(
			'https://acb-api.algoritmika.org/api/movies/list',
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			}
		);
		const data = await response.json();
		return data;
	}
);

const initialState = {
	lists: [],
	error: null,
	loading: false,
};

const createdList = createSlice({
	name: 'createdList',
	initialState,
	reducers: {
		addToCreatedList: (state, action) => {
			state.lists.push(action.payload);
		},
		removeFromCreatedList: (state, action) => {
			state.lists = state.lists.filter((list) => list.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCreatedList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCreatedList.fulfilled, (state, action) => {
				state.lists = action.payload;
				state.loading = false;
			})
			.addCase(fetchCreatedList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { addToCreatedList, removeFromCreatedList } = createdList.actions;
export default createdList.reducer;
