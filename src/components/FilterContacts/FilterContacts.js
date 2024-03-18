import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterContacts.module.css";
import { getFilter } from "../../redux/contactsSlice/contacts-selectors";
import { filterContacts } from "../../redux/filterSlice/filterSlice";

const FilterContacts = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) =>
    dispatch(filterContacts(value));

  const handleCLick = () => dispatch(filterContacts(""));

  return (
    <>
      <div className={styles.wrap}>
        <h3 className={styles.text}>Find contacts by name:</h3>
        {value !== "" && (
          <button className={styles.buttonBack} onClick={handleCLick}>
            &#10226;
          </button>
        )}
      </div>

      <label className={styles.label}>
        <input
          type='text'
          className={styles.input}
          placeholder=' '
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default FilterContacts;
