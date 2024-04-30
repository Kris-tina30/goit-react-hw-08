import React from 'react';
import ContactList from '../components/ContactList';
import SearchBox from '../components/SearchBox';
import ContactForm from '../components/ContactForm';
import css from './ContactsPage.module.css';

import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError } from '../redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <div>
      <h2>New contact form</h2>
        <ContactForm />
      </div>
      <div>
        <SearchBox />
        {loading}
        {error}
        <h2>Your phonebook</h2>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
