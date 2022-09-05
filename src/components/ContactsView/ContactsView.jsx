import { ContactsViewList, ContactsViewListItem } from './ContactsView.styled';
import ContactsItems from 'components/ContactsItems';

import { contactDel } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactsView = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const onDeleteContact = contactId => {
    dispatch(contactDel(contactId));
  };

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
      {visibleContact.map(({ id, name, number }) => (
        <ContactsViewListItem key={id}>
          <ContactsItems
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </ContactsViewListItem>
      ))}
    </ContactsViewList>
  );
};

export default ContactsView;
