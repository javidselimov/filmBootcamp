import { createSlice } from "@reduxjs/toolkit";
const initial = {
    list: [
        
    ]
}

const listIdSlice = createSlice({
    name: "favorites",
    initialState: initial,
    reducers: {
        setList:(state, action)=>{
            state.list=[...state.list, action.payload]
        }
    },
});

export const { setList } = listIdSlice.actions;
export default listIdSlice.reducer;

