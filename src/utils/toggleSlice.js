import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    open: true,
  },
  reducers: {
    toggleState: (state) => {
      state.open = !state.open;
    },
    closeToggle: (state) => {
      state.open = false;
    },
  },
});
export const { toggleState, closeToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
