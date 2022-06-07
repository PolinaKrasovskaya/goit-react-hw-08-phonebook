import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { Wrapper, Title, } from '../styles/PhoneBookView.styles';

export const PhoneBookView = () => {
  return (
    <Wrapper>
      <div>
        <ToastContainer autoClose={2500}/>
        <Title> Pika
          <span role="img" aria-label="Icon-pika">
            ⚡
          </span>
          Book
        </Title>
        <ContactForm />
        <div>
          <Filter />
          <ContactList />
        </div>
      </div>
    </Wrapper>
  );  
};