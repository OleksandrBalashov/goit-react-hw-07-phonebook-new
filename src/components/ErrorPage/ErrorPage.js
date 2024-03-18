import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ErrorPage.module.css";
import { getErrorMessage } from "../../redux/contactsSlice/contacts-selectors";
import { resetError } from "../../redux/contactsSlice/contactsSlice";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const message = useSelector(getErrorMessage);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(resetError());
      }, 3000);
    }
  }, [message, dispatch]);

  return (
    <div className={styles.wrap}>
      <h2>{message}</h2>
    </div>
  );
};

export default ErrorPage;
