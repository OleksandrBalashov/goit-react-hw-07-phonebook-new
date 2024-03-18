import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Contacts.module.css";
import { getFindEditContact } from "../../../redux/contactsSlice/contacts-selectors";
import { editContact } from "../../../redux/editContact/editContactSlice";

const EditButton = ({ id }) => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => getFindEditContact(state, id));

  const findEditContact = () => {
    dispatch(editContact(contact));
  };

  return (
    <button
      type='button'
      className={styles.button + " " + styles.buttonEdit}
      onClick={findEditContact}
    >
      Edit
    </button>
  );
};

export default EditButton;
