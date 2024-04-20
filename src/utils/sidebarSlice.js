import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    nodeId: null,
    isOpen: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
