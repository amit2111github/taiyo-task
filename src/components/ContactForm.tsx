import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/slices/contactSlice';
import { v4 as uuidv4 } from 'uuid';

import { ContactType, ErrorType } from '../utils/types';

function ContactForm({ setShowForm }: { setShowForm: () => void }) {
  const dispatch = useDispatch();
  const [error, setError] = useState<ErrorType>({});
  const [contact, setContact] = useState<ContactType>({
    firstName: '',
    lastName: '',
    status: '',
    id: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact((contact) => ({
      ...contact,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let { firstName, lastName, status } = contact;
    firstName = firstName.trim();
    lastName = lastName.trim();
    setError({});
    if (!firstName) {
      setError({ firstName: 'First Name is required' });
      return;
    }
    if (!lastName) {
      setError({ lastName: 'Last Name is required' });
      return;
    }
    if (!status) {
      setError({ status: 'Please select status' });
      return;
    }
    dispatch(addContact({ firstName, lastName, status, id: uuidv4() }));
    setShowForm();
  };
  return (
    <form className="mx-auto rounded-xl shadow-3xl bg-white mt-4 p-6 md:w-[60%] w-[95%] flex justify-center flex-col relative">
      <div
        className="text-red-500 absolute top-[-5px] right-[-5px] bg-gray-200 rounded-[50%] cursor-pointer h-5 w-5 justify-center flex items-center text-center text-sm border border-red-300"
        onClick={setShowForm}
      >
        x
      </div>
      <p className="font-serif text-2xl text-center mb-4">Create New Contact</p>

      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          First Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          value={contact.firstName}
          id="firstName"
          name="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter First Name"
          required
        />
        {error?.firstName && <p className="text-red-400">{error.firstName}</p>}
      </div>
      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Last Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          placeholder="Enter Last Name"
          value={contact.lastName}
          name="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
        {error?.lastName && <p className="text-red-400">{error?.lastName}</p>}
      </div>

      <div className="flex items-center mb-4 gap-[20px]">
        <p>status</p>
        <div className="flex items-center gap-[2px]">
          <input
            type="radio"
            id="status"
            name="status"
            value="active"
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="status"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Active
          </label>
          <input
            type="radio"
            id="status"
            name="status"
            value="inactive"
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ml-[10px]"
          />
          <label
            htmlFor="status"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Inactive
          </label>
        </div>
      </div>
      {error?.status && <p className="text-red-400">{error?.status}</p>}
      <div className="flex justify-center mt-2">
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create Contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
