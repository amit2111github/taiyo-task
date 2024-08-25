import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for a contact
type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
};

// Define a type for the slice state
interface ContactsState {
  contacts: Contact[];
}

// Define the initial state using that type
const initialState: ContactsState = {
  contacts: [],
};

// Create the slice with typed actions
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
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

// Export actions and reducer
export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
