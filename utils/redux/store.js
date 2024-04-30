import { configureStore } from "@reduxjs/toolkit";
import sidebarCollapseSlice from "./sidebarCollapseSlice";
import SearchSuggestionSlice from "./SearchSuggestionSlice";
import LiveCommentSlice from "./LiveCommentSlice";
import DataSlice from "./DataSlice";

const Store = configureStore({
    reducer:{
        sidebarSlice : sidebarCollapseSlice,
        SearchSuggestionSlice: SearchSuggestionSlice,
        LiveCommentSlice: LiveCommentSlice,
        DataSlice: DataSlice
    }
})

export default Store;