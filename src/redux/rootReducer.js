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
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== action.payload.id
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      }),
});

// Генератори екшенів
export const { setFilter } = contactsSlice.actions;

//Селектори
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
// Редюсер слайсу
export const rootReducer = contactsSlice.reducer;
