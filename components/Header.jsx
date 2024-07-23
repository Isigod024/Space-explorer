// components/Header.jsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '@/public/Space_Explorer.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import ToggleButton from './ToggleButton';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useTheme } from './ThemeProvider'; //Importer le hook personnalisé pour manipuler le thème
import { useLocale } from './LocaleProvider';
import { FormattedMessage } from 'react-intl'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [navVisible, setNavVisible] = useState(false);
  const pathname = usePathname();
  const lastScrollTop = useRef(0);
  const { t } = useTranslation('common'); // Utilisez le namespace 'common'

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <button className={styles.toggleNavButton} onClick={toggleNav}>
        {navVisible ? <FaTimes /> : <FaBars />}
      </button>
      <div className={styles.logo}>
        <Link href="/"><Image src={Logo} alt="Logo" className={styles.ImageLogo} /></Link>
        <h1>{t('space_explorer')}</h1>
      </div>
      <div className={`${styles.navContainer} ${navVisible ? styles.shownavContainer : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={toggleNav}>
                {t('home')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/Article" className={pathname === '/Article' ? styles.active : ''} onClick={toggleNav}>
                {t('article')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/Galerie" className={pathname === '/Galerie' ? styles.active : ''} onClick={toggleNav}>
                {t('gallery')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/AddArticle" className={pathname === '/AddArticle' ? styles.active : ''} onClick={toggleNav}>
                {t('add_article')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/connexion" className={pathname === '/connexion' ? styles.active : ''} onClick={toggleNav}>
                {t('login')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/Contact" className={pathname === '/Contact' ? styles.active : ''} onClick={toggleNav}>
                {t('contact')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <ToggleButton />
            </li>
            <li className={styles.navItem}>
              <LanguageSelector />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


