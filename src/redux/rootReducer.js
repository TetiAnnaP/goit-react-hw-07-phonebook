import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'thunk/thunk';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = null;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items.push(payload);
      })
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = contacts.items.filter(el => el.id !== payload.id);
      })
      .addCase(deleteContactThunk.rejected, handleRejected),
});

// Генератори екшенів
export const { setFilter } = contactsSlice.actions;

//Селектори
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
// Редюсер слайсу
export const rootReducer = contactsSlice.reducer;
