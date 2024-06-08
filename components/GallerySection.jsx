import React from 'react';
import styles from './GallerySection.module.css';
import articles from '../data/Articles.json';

function getRandomImages(articleData, num) {
    const images = articleData.articles.map(article => article.image_principale.lien_image);
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

export default function GallerySection() {
    const selectedImages = getRandomImages(articles, 5);

    return (
        <section className={styles.gallery}>
            <h2>Galerie d'Images et de Vidéos</h2>
            <div className={styles.media}>
                {selectedImages.map((src, index) => (
                    <img key={index} src={src} alt={`Space ${index + 1}`} className={styles.image} />
                ))}
            </div>
        </section>
    );
}
