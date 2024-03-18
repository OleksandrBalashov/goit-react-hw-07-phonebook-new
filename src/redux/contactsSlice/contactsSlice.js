import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
  updateContactThunk,
} from './thunk';
import {
  handleAddContactFulfield,
  handleFulfield,
  handlePending,
  handleRejected,
  handleUpdateContactFulfield,
  handleDeleteContactFulfield,
} from './handlers';

// const initialContact = {
//   name: '',
//   phone: '',
//   id: '',
//   createdAt: '',
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentContact: null,
  },
  reducers: {
    resetError: state => {
      state.error = null;
    },
    editContact: (state, { payload }) => {
      state.currentContact = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfield)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfield)
      .addCase(updateContactThunk.fulfilled, handleUpdateContactFulfield)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfield)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { resetError, editContact } = contactsSlice.actions;
