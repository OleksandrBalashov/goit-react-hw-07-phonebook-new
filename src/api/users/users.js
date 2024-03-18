import axios from "axios";

axios.defaults.baseURL =
  "https://65f6c1e541d90c1c5e0b42f7.mockapi.io/api/contacts";

export const fetchContacts = async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get();
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
};

function findRepeatContact(items, contactName) {
  return items.find(({ name }) => name === contactName);
}

export const addContact = async (contact, { getState }) => {
  const {
    contacts: { items },
  } = getState();

  if (findRepeatContact(items, contact.name)) {
    alert(`${contact.name} is already in contacts`);
    return;
  }

  const { data } = await axios.post("", contact);
  return data;
};

export const updateContacts = async (contact) => {
  const { data } = await axios.put(`/${contact.id}`, contact);

  return data;
};

export const deleteContact = async (id) => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};
