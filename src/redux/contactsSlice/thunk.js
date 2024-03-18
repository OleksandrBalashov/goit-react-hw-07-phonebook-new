import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContact,
  fetchContacts,
  updateContacts,
  addContact,
} from "../../api/users/users";

export const getContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  fetchContacts
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  deleteContact
);

export const updateContactThunk = createAsyncThunk(
  "contacts/updateContact",
  updateContacts
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  addContact
);
