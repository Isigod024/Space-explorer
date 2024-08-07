'use client'
import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import { sendEmail } from './emailService';
import styles from './AjoutArticle.module.css';
import { useTranslation } from 'react-i18next';

export default function AjoutArticle() {
    const [article, setArticle] = useState({
        titre: '',
        image_principale: { lien_image: '', titre_image: '', description_image: '' },
        contenus: [{ titre: '', texte: '', image: { lien_image: '', titre_image: '', description_image: '' } }],
        date_publication: '',
        auteurs: []
    });

    const handleArticleChange = (updatedArticle) => {
        setArticle(updatedArticle);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(article, null, 2));
        alert('Article ajouté avec succès!');
        sendEmail(article);
    };

    return (
        <div className={styles.ajoutArticle}>
            <h1>Ajouter un Article</h1>
            <ArticleForm article={article} onArticleChange={handleArticleChange} onSubmit={handleSubmit} />
        </div>
    );
}
