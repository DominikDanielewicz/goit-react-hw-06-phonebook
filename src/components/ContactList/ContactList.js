import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
// import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contactlist}>
      {contacts.length ? (
        contacts.map(contact => (
          <ContactListElement
            key={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={() => console.log('delete')}
          />
        ))
      ) : (
        <p>There are no contacts</p>
      )}
    </ul>
  );
};

// ContactList.propTypes = {
//   list: propTypes.arrayOf(
//     propTypes.shape({
//       key: propTypes.string,
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//       deleteContact: propTypes.func,
//     })
//   ),
// };

export default ContactList;
