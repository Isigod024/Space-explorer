// components/ArticleCard.jsx

import React from 'react';
import styles from './ArticleCard.module.css';
import Image from 'next/image';

const ArticleCard = ({ article }) => {
    const hasImage = article.image_principale && article.image_principale.lien_image;
    const hasAuthors = Array.isArray(article.auteurs) && article.auteurs.length > 0;

    return (
        <div className={styles.card}>
            {hasImage && (
                <Image
                    src={article.image_principale.lien_image} 
                    alt={article.image_principale.titre_image} 
                    className={styles.image} 
                    height={100}
                    width={100}
                />
            )}
            <div className={styles.content}>
                <h3>{article.titre}</h3>
                {hasAuthors && <p>By {article.auteurs.join(', ')}</p>}
            </div>
        </div>
    );
};

export default ArticleCard;

