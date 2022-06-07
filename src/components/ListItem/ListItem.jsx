import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts';
import {
  ItemList,
  ItemButton,
  Name,
} from './ListItem.styles';

const ListItem = ({ name, phone, id }) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  return (
    <ItemList>
      <div>
        <Name>
          <span role="img" aria-label="Icon-pika">
            ⚡
          </span>
          {name}</Name>: {phone}
      </div>
      <ItemButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </ItemButton>
    </ItemList>
  )
};

export default ListItem;