import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const updateFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(` ${number} is already in contacts!`);
    } else if (name === '' || number === '') {
      alert(`Enter Name and Number in order to add contact`);
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  };
  const onDelete = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const showContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length >= 1 && (
        <Filter value={filter} onChange={updateFilter} />
      )}
      {contacts.length > 0 ? (
        <ContactList contacts={showContacts()} onDeleteContact={onDelete} />
      ) : (
        <p>We coudnt find any contacts in your phonebook, add some contacts</p>
      )}
    </div>
  );
}

export default App;
