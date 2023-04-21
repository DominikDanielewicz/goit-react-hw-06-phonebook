import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';

const App = () => {
  // const deleteContact = id => {
  //   const allContacts = [...contacts];
  //   const index = allContacts.findIndex(person => person.id === id);
  //   allContacts.splice(index, 1);
  //   setContacts(allContacts);
  // };

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  // useEffect(() => {
  //   const storageContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (storageContacts) {
  //     setContacts(storageContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const list = contacts.filter(
  //   contact =>
  //     filter === '' || contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter change={handleFilter} value={filter} /> */}
      <ContactList />
    </div>
  );
};

export default App;
