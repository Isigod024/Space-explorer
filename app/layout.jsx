'use client'
import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Documents from '@/components/Documents';
import Contact from '@/components/Contact';
import Connexion from '@/components/Connexion';
import Accueil from '@/components/Accueil';
import { useState } from 'react';
import styles from './layout.module.css';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }) {
  const [page, setPage] = useState('accueil');
return (
    <html lang='fr'>
      <body className={inter.className}>
        <Header setPage={setPage} />
        {children}
        <main className={styles.main}>
          {page === 'accueil' ? (
            <Accueil />
          ) : page === 'Galerie' ? (
            <Galerie />
          ) : page === 'Article' ? (
            <article />
          ) : page === 'Ajout d article' ? (
            <AjoutDArticle />
          ) : page === 'connexion' ? (
            <Connexion />
          ) : page === 'Contact' ? (
            <Contact />
          ) : (
            <div>404 - Not Found</div>
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
