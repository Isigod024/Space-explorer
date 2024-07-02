import React from 'react';
import styles from './CategorySection.module.css';

export default function CategorySection() {
    const categories = ['Exploration spatiale', 'Astronomie', 'Missions spatiales', 'Technologie spatiale', 'Astrobiologie', 'Histoire de l\'espace'];

    return (
        <section className={styles.categories}>
            <h2>Catégories d&apos;Articles</h2>
            <div className={styles.categoryList}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.category}>
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
