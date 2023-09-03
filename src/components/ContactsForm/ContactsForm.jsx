import css from './ContactsForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/rootReducer';
import { addContactsThunk } from 'thunk/thunk';

const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameExists) {
      alert('This name already exists in the phonebook!');
      return;
    }

    const newContact = {
      name: name,
      phone: number,
    };
    dispatch(addContactsThunk(newContact));

    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.inputName}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
            onChange={handleChangeName}
          />{' '}
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.inputName}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
            onChange={handleChangeNumber}
          />
        </label>
        <button className={css.sbmBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
