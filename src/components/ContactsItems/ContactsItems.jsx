import PropTypes from 'prop-types';
import { ContactsViewListText } from './ContactsItems.styled';
import { useDeleteContactsMutation } from 'redux/contactSlice';

const ContactsItems = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactsMutation();
  return (
    <>
      <ContactsViewListText>{name + ': ' + phone}</ContactsViewListText>
      <button onClick={() => deleteContact(id)}>Удалить</button>
    </>
  );
};

ContactsItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItems;
