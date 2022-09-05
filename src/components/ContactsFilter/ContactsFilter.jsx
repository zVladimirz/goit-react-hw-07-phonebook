import { Input } from './ContactsFilter.styled';

import { useDispatch } from 'react-redux';
import { filterСhange } from 'redux/contactsSlice';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterСhange(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name <br />
      <Input type="text" onChange={onChange} />
    </label>
  );
};

export default ContactsFilter;
