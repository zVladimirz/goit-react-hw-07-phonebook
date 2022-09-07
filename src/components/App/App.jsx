import { Wrapper } from './App.styled';
import ContactsView from 'components/ContactsView';
import ContactsFilter from 'components/ContactsFilter';
import ContactForm from 'components/ContactForm';

function App() {
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
