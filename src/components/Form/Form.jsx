import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4>Name</h4>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Enter a contact name"
          style={{ padding: '5px', marginRight: '10px', fontSize: '16px', width: '300px' }}
        />
        <h4>Number</h4>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter a contact number"
          style={{ padding: '5px', marginRight: '10px', fontSize: '16px', width: '300px' }}
        />
      </div>

      <button type="submit" style={{ padding: '5px 10px', fontSize: '16px' }}>Add contact</button>
    </form>
  );
};

export default Form;
