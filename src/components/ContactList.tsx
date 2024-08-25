import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/slices/contactSlice';
import { Link } from 'react-router-dom';

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
};
type Contacts = { contacts: Contact[] };
type ContactType = {
  contacts: Contacts;
};

function ContactList({ setShowForm }: { setShowForm: () => void }) {
  const contacts = useSelector((state: ContactType) => state.contacts.contacts);
  const dispatch = useDispatch();
  console.log(contacts);
  return (
    <div className="mx-auto mt-4 p-6 px-1 w-full md:w-[90%] flex justify-center flex-col">
      <div className="text-right mb-6">
        <button
          onClick={setShowForm}
          type="button"
          className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded text-sm sm:w-auto px-5 py-2.5 text-center"
        >
          Create Contact
        </button>
      </div>
      {contacts.length === 0 && (
        <p className="text-center font-medium">
          No Contact Found Please Add contact from create contact button.
        </p>
      )}
      <div className="grid lg:grid-cols-4 grid-cols-2 xl:grid-cols-5 md:grid-cols-3 gap-2 md:gap-4">
        {contacts.map((contact) => (
          <div
            className="p-3 py-4 md:p-4 bg-white border border-gray-200 rounded-xl shadow text-center text-[14px]"
            key={contact.id}
          >
            <div className="flex gap-[10px] sm:gap-[20px] mb-2">
              <div className="flex gap-[4px] justify-between w-full">
                <div className="text-left w-full">First Name</div>
                <div className="text-left w-full">{contact.firstName}</div>
              </div>
            </div>
            <div className="flex gap-[10px] sm:gap-[20px] mb-2">
              <div className="flex gap-[4px] justify-between w-full">
                <div className="text-left w-full">Last Name</div>
                <div className="text-left w-full">{contact.lastName}</div>
              </div>
            </div>
            <div className="flex gap-[10px] sm:gap-[20px] mb-2">
              <div className="flex gap-[4px] justify-between w-full">
                <div className="text-left w-full">Status</div>
                <div className="text-left w-full">
                  {contact.status === 'active' ? (
                    <span className="bg-indigo-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
                      {contact.status}
                    </span>
                  ) : (
                    <span className="bg-gray-300 text-gray-900 text-xs font-medium px-2.5 py-1 rounded">
                      {contact.status}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-[10px] sm:gap-[20px] mt-4">
              <div className="flex gap-[4px] justify-between w-full">
                <div className="text-left w-full">
                  <button
                    onClick={(e) => dispatch(deleteContact(contact.id))}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-2 py-1.5 me-2 mb-2"
                  >
                    Delete
                  </button>
                </div>
                <div className="text-left w-full">
                  <Link to={'edit/' + contact.id}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-black font-medium rounded text-sm px-3 py-1.5 me-2 mb-2"
                    >
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
