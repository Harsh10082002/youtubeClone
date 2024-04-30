import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"dataSlice",
    initialState:{
        searchInput: "",
    },
    reducers:{
        updateSearchInput:(state,action)=>{
            state.searchInput=action.payload;
        },
    }

})

export const {updateSearchInput} = dataSlice.actions;
export default dataSlice.reducer;