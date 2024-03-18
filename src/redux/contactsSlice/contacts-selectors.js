import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.filter;
export const getTotalCount = (state) => getItems(state).length;
export const getEditContact = (state) => state.editContact;

export const getFindEditContact = (state, contactId) => {
  const contacts = getItems(state);

  return contacts.find(({ id }) => id === contactId);
};

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter?.toLowerCase();
    return items.filter((item) =>
      item?.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const getErrorMessage = (state) => state.contacts.error;
export const getLoading = (state) => state.contacts.isLoading;
