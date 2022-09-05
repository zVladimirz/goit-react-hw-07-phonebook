import { useRef } from 'react';

import { Wrapper } from './App.styled';
import ContactsView from 'components/ContactsView';

import ContactsFilter from 'components/ContactsFilter';
import ContactForm from 'components/ContactForm';

import { contactInit } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  if (firstRender.current) {
    firstRender.current = false;
    const parserContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parserContacts) {
      dispatch(contactInit(parserContacts));
    }
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsView />
    </Wrapper>
  );
}

export default App;
