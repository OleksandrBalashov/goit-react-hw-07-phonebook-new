import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
  updateContactThunk,
} from "./thunk";
import {
  handleAddContactFulfield,
  handleFulfield,
  handlePending,
  handleRejected,
  handleUpdateContactFulfield,
  handleDeleteContactFulfield,
} from "./handlers";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfield)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfield)
      .addCase(updateContactThunk.fulfilled, handleUpdateContactFulfield)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfield)
      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { resetError } = contactsSlice.actions;
