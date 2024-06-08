import React from 'react';
import styles from './Acceuil.module.css';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import CategorySection from './CategorySection';
import GallerySection from './GallerySection';
import Newsletter from './Newsletter';

export default function Acceuil() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <HeroSection />
                <FeaturedSection />
                <CategorySection />
                <GallerySection />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
