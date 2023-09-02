import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    setContacts(state, action) {
      state.contacts.push(action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      const deletedContact = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(deletedContact, 1);
    },
  },
});

// Генератори екшенів
export const { setContacts, setFilter, deleteContact } = contactsSlice.actions;

//Селектори
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
// Редюсер слайсу
export const rootReducer = contactsSlice.reducer;
