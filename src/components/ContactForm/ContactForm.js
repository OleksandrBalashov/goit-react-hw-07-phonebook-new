import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEditContact } from "../../redux/contactsSlice/contacts-selectors";
import {
  addContactThunk,
  getContactsThunk,
  updateContactThunk,
} from "../../redux/contactsSlice/thunk";
import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  phone: "",
  id: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const contact = useSelector(getEditContact);

  const userName = contact?.name;

  useEffect(() => {
    const editContact = () => {
      setState({ ...contact });
    };

    editContact();
  }, [contact]);

  const handleInputChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmitContactFrom = useCallback(
    (e) => {
      e.preventDefault();
      const { name, phone, id } = state;

      if (!name || !phone) return;

      !!id
        ? dispatch(updateContactThunk(state))
        : dispatch(addContactThunk(state));

      setState({ ...initialState });
      dispatch(getContactsThunk());
    },

    [state, dispatch]
  );

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        {userName ? "Edit contact" : "Create contact"}
      </h2>
      <form className={styles.form} onSubmit={handlerSubmitContactFrom}>
        <div className={styles.wrapLabel}>
          <label className={styles.label}>
            <p className={styles.text}>Name</p>
            <input
              type="text"
              name="name"
              className={styles.input}
              value={state.name}
              placeholder=" "
              onChange={handleInputChange}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.text}>Phone</p>
            <input
              type="number"
              name="phone"
              className={styles.input}
              value={state.phone}
              placeholder=" "
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className={styles.button}>
          {userName ? "Edit contact" : "Add contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
