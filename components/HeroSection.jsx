import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <h1>Welcome to Space Explorer</h1>
            <p>Discover the universe's secrets</p>
        </section>
    );
}
