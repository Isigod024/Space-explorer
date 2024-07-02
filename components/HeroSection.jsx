import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <h1>Bienvenu sur Space explorer</h1>
            <p>Plongez dans les mystères de l&apos;univers avec nous. Sur Space Explorer, nous vous proposons une exploration fascinante de l&apos;espace, des étoiles et des galaxies, en passant par les trous noirs et les nébuleuses. Que vous soyez un passionné d&apos;astronomie ou simplement curieux de découvrir les merveilles cosmiques, nos articles sont conçus pour éveiller votre curiosité et enrichir vos connaissances.</p>
        </section>
    );
}
