import { ContactsViewList, ContactsViewListItem } from './ContactsView.styled';
import ContactsItems from 'components/ContactsItems';

import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactSlice';


const ContactsView = () => {
  const filter = useSelector(state => state.contacts.filter);

  const { data: contacts } = useFetchContactsQuery();

  if (!contacts) {
    return;
  }

  const getvisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = getvisibleContact();

  return (
    <ContactsViewList>
      {visibleContact.map(({ id, name, phone }) => (
        <ContactsViewListItem key={id}>
          <ContactsItems id={id} name={name} phone={phone} />
        </ContactsViewListItem>
      ))}
    </ContactsViewList>
  );
};

export default ContactsView;
