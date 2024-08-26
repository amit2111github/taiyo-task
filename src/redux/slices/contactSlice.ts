import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactType } from '../../utils/types';

interface ContactsState {
  contacts: ContactType[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<ContactType>) => {
      const { id, firstName, lastName, status } = action.payload;
      const existingContact = state.contacts.find(
        (contact) => contact.id === id
      );
      if (existingContact) {
        existingContact.firstName = firstName;
        existingContact.lastName = lastName;
        existingContact.status = status;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
