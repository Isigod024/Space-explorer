import styles from "./page.module.css";
import image from 'next/image';
import neb from '@/public/nebuleuse.webp'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.welcome}>
      Bienvenue à bord de Cosmos-Voyager Galactique, où l'univers infini vous attend pour une aventure magique. Que chaque étoile illumine votre chemin à travers les merveilles cosmiques.

      <img src="nebuleuse.webp" alt="image de nebuleuse" />
      </div>
    </main>
  );
}
