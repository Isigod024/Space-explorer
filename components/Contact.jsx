import React from 'react';
import styles from './Contact.module.css'; // Assurez-vous que le chemin est correct

const contacts = [
  { name: 'Yanik', email: 'yanik@example.com', phone: '123-456-7890' },
  { name: 'Isidore', email: 'isodore@example.com', phone: '123-456-7891' },
  { name: 'Fabrice', email: 'fabrice@example.com', phone: '123-456-7892' }
];

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <ul className={styles.contactList}>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
