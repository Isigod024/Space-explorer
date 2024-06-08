import React from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <h2>Newsletter</h2>
            <p>Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles et articles.</p>
            <form className={styles.form}>
                <input type="email" placeholder="Votre email" className={styles.input} />
                <button type="submit" className={styles.button}>S'inscrire</button>
            </form>
        </section>
    );
}
