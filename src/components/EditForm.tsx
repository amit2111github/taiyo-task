import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../redux/slices/contactSlice';
import { useNavigate } from 'react-router-dom';

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
};
function EditForm({ contactDetails }: { contactDetails: Contact }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [contact, setContact] = useState<Contact>(contactDetails);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact((contact) => ({
      ...contact,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updateContact({ ...contact }));
    navigate(-1);
  };
  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <form className="mx-auto rounded-xl shadow-3xl bg-white mt-8 p-6 md:w-[60%] w-[95%] flex justify-center flex-col relative">
      <p className="font-serif text-2xl text-center">Edit Contact</p>
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
          placeholder="Enter Last Name"
          id="lastName"
          value={contact.lastName}
          name="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="flex items-center mb-4 gap-[20px]">
        <p>status</p>
        <div className="flex items-center gap-[2px]">
          <input
            type="radio"
            id="status"
            name="status"
            checked={contact.status === 'active'}
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
            checked={contact.status === 'inactive'}
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
      <div className="flex justify-between gap-[20px] mt-2">
        <button
          onClick={handleCancel}
          className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
}

export default EditForm;
