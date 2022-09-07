import { filterСhange } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

import { useCreateContactsMutation } from 'redux/contactSlice';
import { useFetchContactsQuery } from 'redux/contactSlice';

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
  phone: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const [createContacts] = useCreateContactsMutation();
  const { data: contacts } = useFetchContactsQuery();

  if (!contacts) {
    return;
  }

  const addContact = async values => {
    try {
      await createContacts(values);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (value, { resetForm }) => {
    const indexName = contacts.findIndex(
      contact => contact.name === value.name
    );
    if (indexName === -1) {
      addContact(value);
      dispatch(filterСhange(''));
    } else {
      alert(value.name + ' is already in contacts');
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
          <Input type="text" name="phone" />
          <FormError name="phone" component="div" />
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
