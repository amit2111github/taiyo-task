import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditForm from './EditForm';
import { ContactType as Contact } from '../utils/types';

type Contacts = { contacts: Contact[] };
type ContactType = {
  contacts: Contacts;
};
function Edit() {
  const { id } = useParams();
  console.log(id);
  const contacts = useSelector((state: ContactType) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) {
    return <p className="mt-4 text-center">Oops! No Contact Found</p>;
  } else return <EditForm contactDetails={contact} />;
}

export default Edit;
