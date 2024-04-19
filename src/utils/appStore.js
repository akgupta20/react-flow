import { configureStore } from "@reduxjs/toolkit";
import nodeSlice from "./nodeSlice";

const appStore = configureStore({
    reducer: {
      node: nodeSlice,
  },
});

export default appStore;
