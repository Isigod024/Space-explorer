// app/layout.jsx
'use client';

import Header from '@/components/Header';
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import styles from './layout.module.css';
import { I18nextProvider } from 'react-i18next';

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: 'Space-Explorer | Accueil',
  description: 'Site web présentant les fonctionnalités de React et Next.js.',
  openGraph: {
    title: 'Space-Explorer | Accueil',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    images: ['./Space_Explorer.webp']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <I18nextProvider i18n={i18n}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}

