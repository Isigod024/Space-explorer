import React from 'react';
import Image from 'next/image';
import articlesData from '../data/Articles.json';
import styles from './ArticleShow.module.css';

export default function ArticleShow({ articleId }) {
    const article = articlesData.articles[articleId];

    if (!article) {
        return <p>Article non trouvé</p>;
    }

    return (
        <div className={styles.articleShow}>
            <h1 className={styles.title}>{article.titre}</h1>
            <Image 
                src={article.image_principale.lien_image} 
                alt={article.image_principale.titre_image} 
                width={800} 
                height={400} 
                className={styles.mainImage} 
            />
            {article.contenus.map((contenu, index) => (
                <div key={index} className={styles.contenuBubble}>
                    <div className={styles.contenuHeader}>
                        <h2>{contenu.titre}</h2>
                        <Image 
                            src={contenu.image.lien_image} 
                            alt={contenu.image.titre_image} 
                            width={150} 
                            height={150} 
                            className={styles.contenuImage} 
                        />
                    </div>
                    <p className={styles.contenuTexte}>{contenu.texte}</p>
                </div>
            ))}
        </div>
    );
}
