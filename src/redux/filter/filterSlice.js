import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: {
      language: "",
      level: "",
      price: "",
    },
  },
  reducers: {
    filterValue(state, action) {
      console.log(action.payload);
      state.filter = action.payload;
    },
    resetFilter(state, action) {
      state.filter = {
        language: "",
        level: "",
        price: "",
      };
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterValue, resetFilter } = filterSlice.actions;
