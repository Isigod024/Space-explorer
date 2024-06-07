import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>&copy; Space-Explorer</div>
            <div className={styles.infoSection}>
                <div className={styles.column}>
                    <h4>Information</h4>
                    <ul>
                        <li><a href="/a-propos-de-nous">À Propos De Nous</a></li>
                        <li><a href="/contactez-nous">Contactez-Nous</a></li>
                        <li><a href="/politique-de-confidentialite">Politique De Confidentialité</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Besoin D'aide?</h4>
                    <ul>
                        <li><a href="/votre-compte">Votre Compte</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
