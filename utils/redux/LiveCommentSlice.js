import { createSlice } from "@reduxjs/toolkit";

const LiveCommentSlice = createSlice({
    name:"LiveCommentSlice",
    initialState:{
        LiveData:[],
    },
    reducers:{
        addComment : (state, action)=>{
            // state.LiveData.splice(10,1);
            // state.LiveData.push(action.payload);
        }
    }
});

export const {addComment} = LiveCommentSlice.actions;
export default LiveCommentSlice.reducer;