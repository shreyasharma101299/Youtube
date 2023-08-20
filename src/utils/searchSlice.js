import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearItems } = searchSlice.actions;
export default searchSlice.reducer;
