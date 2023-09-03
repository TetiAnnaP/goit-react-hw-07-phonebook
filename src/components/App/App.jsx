import ContactsForm from '../ContactsForm/ContactsForm';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <div className={css.wrapper}>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactsForm />
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
