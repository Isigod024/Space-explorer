'use client';

import React from 'react';
import styles from './Acceuil.module.css';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import CategorySection from './CategorySection';
import GallerySection from './GallerySection';
import Newsletter from './Newsletter';
import { useTranslation } from 'react-i18next';


const Acceuil = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t('welcome')}</h1>
        <HeroSection />
        <FeaturedSection />
        <CategorySection />
        <GallerySection />
        <Newsletter />
      </main>
    </div>
  );
};

export default Acceuil;
