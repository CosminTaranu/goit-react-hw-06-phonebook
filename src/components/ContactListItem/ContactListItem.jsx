import React from 'react';

const ContactListItem = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default ContactListItem;
