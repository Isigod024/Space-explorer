'use client'; // Ajoutez cette ligne en haut du fichier

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

const contacts = [
  { name: 'Yanik', email: 'yanik@example.com', phone: '123-456-7890' },
  { name: 'Isidore', email: 'isodore@example.com', phone: '123-456-7891' },
  { name: 'Fabrice', email: 'fabrice@example.com', phone: '123-456-7892' }
];

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '', recipient: contacts[0].email });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., send the form data to a server
    console.log('Form submitted:', form);
    // Clear the form
    setForm({ name: '', email: '', message: '', recipient: contacts[0].email });
  };

  return (
    <div className={styles.contactContainer}>
      <h1>{t('contact')}</h1>
      <ul className={styles.contactList}>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
      <div className={styles.contactForm}>
        <h2>{t('send_message')}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="recipient">{t('recipient')}:</label>
            <select
              id="recipient"
              name="recipient"
              value={form.recipient}
              onChange={handleChange}
              required
            >
              {contacts.map((contact) => (
                <option key={contact.email} value={contact.email}>
                  {contact.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t('name')}:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">{t('email')}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">{t('message')}:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.formButton}>{t('send')}</button>
        </form>
      </div>
    </div>
  );
}


