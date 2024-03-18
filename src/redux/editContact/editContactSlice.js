import { createSlice } from "@reduxjs/toolkit";

const initialContact = {
  name: "",
  phone: "",
  id: "",
  createdAt: "",
};

const editContactSlice = createSlice({
  name: "editContact",
  initialState: initialContact,
  reducers: {
    editContact: (_, { payload }) => payload,
  },
});

export const editContacReducer = editContactSlice.reducer;

export const { editContact } = editContactSlice.actions;
