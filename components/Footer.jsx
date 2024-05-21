import styles from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
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
                    <div className={styles.column}>
                        <h4>Réseaux sociaux</h4>
                        <ul className={styles.socialMedia}>
                            <li>
                                <a href="https://www.facebook.com/NASA" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.instagram.com/nasa/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />

                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@NASA" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
