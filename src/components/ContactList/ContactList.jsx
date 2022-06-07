import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts';
import { useGetContactsQuery } from 'redux/contacts';
import { SpinnerCircular } from 'spinners-react';
import { ListContacts } from './ContactList.styles';

const ContactList = () => {
  const { data: contacts = [], isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filteredContacts = visibleContacts();

  return (
    <ListContacts>
      {isLoading &&
        <SpinnerCircular
          size="40px"
          secondaryColor="#B0C4DE"
          style={{
            margin: "20px",
            color: '#191970',
          }}
        />}
      {contacts &&
        filteredContacts.map(({ name, id, number }) => (
          <ListItem
            key={id}
            name={name}
            phone={number}
            id={id}
          />
        ))
      }
    </ListContacts>
  );
};

export default ContactList;