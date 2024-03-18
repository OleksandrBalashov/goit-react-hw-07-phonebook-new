import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filter: (_, { payload }) => payload,
  },
});

export const filterReducer = filterSlice.reducer;

export const { filter: filterContacts } = filterSlice.actions;
