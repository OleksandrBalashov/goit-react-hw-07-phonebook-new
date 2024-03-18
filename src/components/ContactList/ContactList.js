import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactFilter from '../FilterContacts';
import EditButton from './EditButton';
import { getVisibleContacts } from '../../redux/contactsSlice/contacts-selectors';
import { deleteContactThunk } from '../../redux/contactsSlice/thunk';
import styles from './Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContactThunk(id));

  return (
    <>
      <ContactFilter />
      <ul className={styles.list}>
        {contacts.map(({ name, phone, id }) => (
          <li key={id} className={styles.item}>
            <p className={styles.text}>
              {name}: {phone}
            </p>
            <EditButton id={id} />
            <button
              type="button"
              className={styles.button}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
