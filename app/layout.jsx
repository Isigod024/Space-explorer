'use client';
import Header from '@/components/Header';
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import ToggleButton from '@/components/ToggleButton';
import "./globals.css";
import styles from './layout.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <Header />
        <ToggleButton />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

