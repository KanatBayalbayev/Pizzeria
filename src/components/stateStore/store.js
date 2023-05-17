import { configureStore } from "@reduxjs/toolkit";
import modal from "./itemModal";

const store = configureStore({
  reducer: {
    itemModal: modal.reducer,
  },
});

export default store;
