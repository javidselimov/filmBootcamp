import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: '',
};
export const searchLineSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchLine: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setSearchLine } = searchLineSlice.actions;

export default searchLineSlice.reducer;

// ! ID E GORE AXTARIS
// ! EYNI FILMLERDEN IBARET LIST YARATMA
// ! checklist
