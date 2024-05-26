import styles from './MenuNav.module.css';
import React from 'react';
export default function MenuNav({ setPage }) {
    return <nav className={styles.nav}>
        <ul>
            <li><a href='#' onClick={() => setPage('accueil')}>Accueil</a></li>
            <li><a href='#' onClick={() => setPage('documents')}>Documents</a></li>
            <li><a href='#' onClick={() => setPage('contact')}>Contact</a></li>
            <li><a href='#' onClick={() => setPage('connexion')}>Connexion</a></li>
        </ul>
    </nav>;
}