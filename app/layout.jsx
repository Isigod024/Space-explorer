// app/layout.jsx
import Header from '@/components/Header';
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import ToggleButton from '@/components/ToggleButton';
import "./globals.css";
import styles from './layout.module.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Assurez-vous que le chemin est correct

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <I18nextProvider i18n={i18n}>
          <Header />
          <ToggleButton />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}

