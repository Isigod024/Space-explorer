import React from 'react';
import styles from './GallerySection.module.css';
import articles from '../data/Articles.json';
import Image from 'next/image';

function getRandomImages(articleData, num) {
    const images = articleData.articles
        .map(article => article.image_principale && article.image_principale.lien_image)
        .filter(image => image !== undefined);
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

export default function GallerySection() {
    const selectedImages = getRandomImages(articles, 5);

    return (
        <section className={styles.gallery}>
            <h2>Galerie d&apos;Images et de Vidéos</h2>
            <div className={styles.media}>
                {selectedImages.map((src, index) => (
                    <Image key={index} src={src} alt={`Space ${index + 1}`} className={styles.image} height={100} width={100}/>
                ))}
            </div>
        </section>
    );
}

    

