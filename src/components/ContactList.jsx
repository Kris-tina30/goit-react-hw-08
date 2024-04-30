import React from 'react';

import { useDispatch, useSelector } from 'react-redux';


import Contact from './Contact';
import { selectFilteredContacts } from '../redux/selectors';
import { deleteContact } from '../redux/contacts/operations';

function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {Array.isArray(visibleContacts) &&
        visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contacts={contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
