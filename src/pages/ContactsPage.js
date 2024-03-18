import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

import Spinner from "../components/Spinner";
import ErrorPage from "../components/ErrorPage";
import {
  getErrorMessage,
  getLoading,
  getTotalCount,
} from "../redux/contactsSlice/contacts-selectors";
import { getContactsThunk } from "../redux/contactsSlice/thunk";

const ContactsPage = () => {
  const isLoading = useSelector(getLoading);
  const errorMessage = useSelector(getErrorMessage);
  const totalCount = useSelector(getTotalCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {isLoading && <Spinner />}
      {errorMessage && <ErrorPage />}
      {!!totalCount && <ContactList />}
    </>
  );
};

export default ContactsPage;
