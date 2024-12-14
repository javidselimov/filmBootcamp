import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [

    ]
}


const listId = createSlice({
    name: "ListId",
    initialState: initialState,
    reducers: {
        setList: (state, action) => {
            state.list = [...state.list, action.payload];
        },
    }
})

export const { setList } = listId.actions;
export default listId.reducer;