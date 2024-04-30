import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const fetchContacts = createAsyncThunk('contacts / fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/contacts');
    console.log('contacts: ', data);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addContact = createAsyncThunk('contacts/addContact', async (formData, thunkAPI) => {
  try {
    const { data } = await instance.post('/contacts', formData);
    console.log('addContact: ', data);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      console.log('deleteContact: ', data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
