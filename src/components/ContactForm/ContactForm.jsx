import { contactAdd, filterСhange } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledButton,
  Input,
  ErrorText,
  DivCenter,
  FormBorder,
} from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);

  const onSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const indexName = contacts.findIndex(contact => contact.name === name);
    if (indexName === -1) {
      dispatch(contactAdd(contact));

      dispatch(filterСhange(''));
    } else {
      alert(name + ' is already in contacts');
    }

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormBorder autoComplete="off">
        <label htmlFor="login">
          Name
          <br />
          <Input type="text" name="name" />
          <FormError name="name" component="div" />
        </label>
        <br />
        <label htmlFor="password">
          Number <br />
          <Input type="text" name="number" />
          <FormError name="number" component="div" />
        </label>
        <br />
        <DivCenter>
          <StyledButton type="submit">Add contact</StyledButton>
        </DivCenter>
      </FormBorder>
    </Formik>
  );
};

export default ContactForm;
