// /pages/add-article.jsx
import { useState } from 'react';
import styles from './AjoutArticle.module.css';

export default function AddArticle() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
            title,
            image,
            content,
            author,
            date,
        };
        // Vous pouvez ajouter ici la logique pour sauvegarder l'article, par exemple l'envoyer à une API.
        console.log(newArticle);
        // Réinitialiser le formulaire
        setTitle('');
        setImage('');
        setContent('');
        setAuthor('');
        setDate('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ajouter un Nouvel Article</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Titre</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="content">Contenu</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="author">Auteur</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="date">Date de publication</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Ajouter l'Article</button>
            </form>
        </div>
    );
}
