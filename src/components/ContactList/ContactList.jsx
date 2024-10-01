import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

const contactListStyle = {
  maxHeight: '200px',
  overflowY: 'scroll',
  padding: '10px',
  border: '1px solid #ccc',
};

const listItemStyle = {
  marginBottom: '5px',
  fontSize: '16px',
};

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul style={contactListStyle}>
    {contacts.map(contact => (
      <ContactListItem 
        key={contact.id} 
        contact={contact} 
        onDelete={onDeleteContact} 
        style={listItemStyle}
      />
    ))}
  </ul>
);

export default ContactList;
