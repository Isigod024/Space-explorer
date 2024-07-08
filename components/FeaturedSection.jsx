// components/FeaturedSection.jsx
'use client';

import React from 'react';
import articles from '../data/Articles.json';
import styles from './FeaturedSection.module.css';
import { useTranslation } from 'react-i18next';

const FeaturedSection = () => {
  const { t } = useTranslation();

  if (!Array.isArray(articles)) {
    console.error("The imported JSON is not an array.");
    return null;
  }

  return (
    <div className={styles.featuredSection}>
      {articles.map((article, index) => (
        <div key={index} className={styles.articleCard}>
          <h2>{t(article.title)}</h2>
          <p>{t(article.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedSection;
