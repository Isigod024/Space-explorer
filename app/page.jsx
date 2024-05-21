import styles from "./page.module.css";
import image from 'next/image';
import neb from '@/public/nebuleuse.webp'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.welcome}>
        Soyez la bienvenue sur Space-Explorer
      <img src="nebuleuse.webp" alt="image de nebuleuse" />
      </div>
    </main>
  );
}
