import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const appStore = configureStore({
  reducer: { toggle: toggleSlice, search: searchSlice, chat: chatSlice },
});
export default appStore;
