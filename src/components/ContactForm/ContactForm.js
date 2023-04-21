import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
// import propTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactForm__label} htmlFor="name">
        Name
      </label>
      <input
        className={css.contactForm__field}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-ZĄąĆćĘęŃńÓóŚśŹźŻż]+(([' -][a-zA-ZĄąĆćĘęŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŃńÓóŚśŹźŻż]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.contactForm__label} htmlFor="number">
        Number
      </label>
      <input
        className={css.contactForm__field}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.contactForm__button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   addContact: propTypes.func.isRequired,
//   deleteContact: propTypes.func.isRequired,
// };

export default ContactForm;
