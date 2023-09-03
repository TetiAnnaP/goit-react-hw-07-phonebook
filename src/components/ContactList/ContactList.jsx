import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/rootReducer';
import { deleteContactThunk, getContactsThunk } from 'thunk/thunk';

const ContactList = () => {
  const [visibleContacts, setVisibleContacts] = useState([]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteBtn = e => {
    const id = e.target.id;
    dispatch(deleteContactThunk(id));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    setVisibleContacts(filteredContacts);
  }, [contacts, filter]);

  return (
    <ul className={css.ul}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.li} key={nanoid()}>
            <p className={css.text}>
              {contact.name}: {contact.phone}
            </p>
            <button
              className={css.sbmBtn}
              type="button"
              id={contact.id}
              onClick={handleDeleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
