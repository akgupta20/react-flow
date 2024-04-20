import { configureStore } from "@reduxjs/toolkit";
import flowSlice from "./flowSlice";
import sidebarSlice from "./sidebarSlice";

const appStore = configureStore({
  reducer: {
    flow: flowSlice,
    sidebar: sidebarSlice,
  },
});

export default appStore;
