export const handleFulfield = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

export const handleAddContactFulfield = (state, { payload }) => {
  state.items = [...state.items, payload];
  state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};

export const handleUpdateContactFulfield = (state, { payload }) => {
  state.items = state.items.map((contact) =>
    contact.id === payload.id ? payload : contact
  );
  state.isLoading = false;
};

export const handleDeleteContactFulfield = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload.id);
  state.isLoading = false;
};
