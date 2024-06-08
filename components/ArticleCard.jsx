import React from 'react';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ article }) {
    return (
        <div className={styles.card}>
            <img src={article.image_principale.lien_image} alt={article.image_principale.description_image} className={styles.image} />
            <div className={styles.content}>
                <h3>{article.titre}</h3>
                <p>By {article.auteurs.join(', ')}</p>
            </div>
        </div>
    );
}
