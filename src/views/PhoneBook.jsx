import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { Wrapper, Title } from './PhoneBook.styles';

export const PhoneBook = () => {
  return (
    <Wrapper>
      <ToastContainer autoClose={2500}/>
      <Title>Phonebook</Title>
      <ContactForm />
      <div>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </div>
    </Wrapper>
  );  
};