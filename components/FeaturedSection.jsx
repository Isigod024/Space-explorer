import React from 'react';
import styles from './FeaturedSection.module.css';
import ArticleCard from './ArticleCard';
import articles from '../data/Articles.json';

export default function FeaturedSection() {
    return (
        <section className={styles.featured}>
            <h2>À la Une</h2>
            <div className={styles.articles}>
                {articles.articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </section>
    );
}
