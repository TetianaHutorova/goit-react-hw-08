import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
};
const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterItems: (state, actions) =>{ (state.name = actions.payload)},
  },
});
export const { filterItems } = slice.actions;
export default slice.reducer;
