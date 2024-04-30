import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestionSlice = createSlice({
    name: "SearchSuggestionSlice",
    initialState: {
        isShowSuggestion:false
    },
    reducers: {
        updateShowSuggestionSatus:(state,action)=>{
            state.isShowSuggestion=action.payload;
            // console.log(action.payload);
        }
    }
});

export const { updateSuggestions, updateShowSuggestionSatus } = SearchSuggestionSlice.actions;
export default SearchSuggestionSlice.reducer;

