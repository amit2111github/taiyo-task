import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function Contact() {
  const [showForm, setShowForm] = useState<Boolean>(false);
  return showForm ? (
    <ContactForm setShowForm={() => setShowForm((showForm) => !showForm)} />
  ) : (
    <ContactList setShowForm={() => setShowForm((showForm) => !showForm)} />
  );
}

export default Contact;
