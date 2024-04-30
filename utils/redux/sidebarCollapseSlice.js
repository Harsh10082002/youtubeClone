import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name:"SidebarSlice",
    initialState:[
        {isshowSidebar:false}
    ],
    reducers: {
        showSidebarAction: (state, action) => {
            state[0].isshowSidebar = action.payload;
        }
    }
})

export const {showSidebarAction} = SidebarSlice.actions;
export default SidebarSlice.reducer;