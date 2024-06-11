'use client'
import styles from './Footer.module.css';
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>&copy; Space-Explorer</div>
            <div className={styles.infoSection}>
                <div className={styles.column}>
                    <h4>Information</h4>
                    <ul>
                        <li><Link href="/a-propos-de-nous">À Propos De Nous</Link></li>
                        <li><Link href="/contactez-nous">Contactez-Nous</Link></li>
                        <li><Link href="/politique-de-confidentialite">Politique De Confidentialité</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Besoin D'aide?</h4>
                    <ul>
                        <li><Link href="/votre-compte">Votre Compte</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}