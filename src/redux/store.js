import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice/contactsSlice";
import { filterReducer } from "./filterSlice/filterSlice";
import { editContacReducer } from "./editContact/editContactSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    editContact: editContacReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ["contacts/deleteContact/fulfilled"],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ["meta.arg", "payload.timestamp"],
  //       // Ignore these paths in the state
  //       ignoredPaths: ["items.dates"],
  //     },
  //   }),
});

export default store;
