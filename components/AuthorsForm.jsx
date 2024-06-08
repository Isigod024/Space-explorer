import React, { useState } from 'react';
import styles from './AuthorsForm.module.css';

export default function AuthorsForm({ authors, onAuthorsChange }) {
    const [newAuthor, setNewAuthor] = useState('');

    const handleAddAuthor = () => {
        onAuthorsChange([...authors, newAuthor]);
        setNewAuthor('');
    };

    return (
        <div className={styles.authorsForm}>
            <h3>Auteurs</h3>
            <ul>
                {authors.map((author, index) => (
                    <li key={index}>{author}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Ajouter un auteur"
            />
            <button type="button" onClick={handleAddAuthor}>Ajouter Auteur</button>
        </div>
    );
}
