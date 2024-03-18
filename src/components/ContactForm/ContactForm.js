import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEditContact } from '../../redux/contactsSlice/contacts-selectors';
import {
  addContactThunk,
  updateContactThunk,
} from '../../redux/contactsSlice/thunk';
import styles from './ContactForm.module.css';

const initialState = {
  name: '',
  phone: '',
  id: '',
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const contact = useSelector(getEditContact);
  const isEdit = !!contact;

  useEffect(() => {
    if (contact) setState(contact);
  }, [contact]);

  const handleInputChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handlerSubmitContactFrom = e => {
    e.preventDefault();
    const { name, phone } = state;

    if (!name || !phone) return;

    isEdit
      ? dispatch(updateContactThunk(state))
      : dispatch(addContactThunk(state));

    setState({ ...initialState });
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        {isEdit ? 'Edit contact' : 'Create contact'}
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
          {isEdit ? 'Edit contact' : 'Add contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
