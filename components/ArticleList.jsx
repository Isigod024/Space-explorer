'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './ArticleList.module.css';
import articlesData from '../data/Articles.json';

export default function ArticleList() {
    const router = useRouter();

    const handleArticleClick = (index) => {
        router.push(`/article/${index}`);
    };

    return (
        <div className={styles.articleList}>
            {articlesData.articles.map((article, index) => (
                <div key={index} className={styles.articleBubble} onClick={() => handleArticleClick(index)}>
                    <span>{article.titre}</span>
                    <Image 
                        src={article.image_principale.lien_image} 
                        alt={article.image_principale.titre_image} 
                        width={50} 
                        height={50} 
                        className={styles.articleImage} 
                    />
                </div>
            ))}
        </div>
    );
}
