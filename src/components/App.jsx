import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';

const App = () => {
  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

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
