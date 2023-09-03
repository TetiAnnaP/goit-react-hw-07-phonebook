import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContact, fetchContacts } from 'services/servisec';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const data = await fetchContacts();
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkApi) => {
    try {
      const data = await addContacts(newContact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/del',
  async (id, thunkApi) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
