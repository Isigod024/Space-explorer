
'use client'
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '@/public/Space_Explorer.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollTop = 0;
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    
    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
             <button className={styles.toggleButton} onClick={toggleNav}>
                {navVisible ? <FaTimes /> : <FaBars />}
            </button>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" className={styles.ImageLogo} />
        <h1>SPACE EXPLORER</h1>
      </div>
      <div className={`${styles.navContainer} ${navVisible ? styles.shownavContainer : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
                    <li className={styles.navItem}><Link href="/" onClick={toggleNav}>Accueil</Link></li>
                    <li className={styles.navItem}><Link href="/Galerie" onClick={toggleNav}>Galerie</Link></li>
                    <li className={styles.navItem}><Link href="/AddArticle" onClick={toggleNav}>Ajout d'article</Link></li>
                    <li className={styles.navItem}><Link href="/connexion" onClick={toggleNav}>Connexion</Link></li>
                    <li className={styles.navItem}><Link href="/Contact" onClick={toggleNav}>Contact</Link></li>
                </ul>
        </nav>
      </div>
    </header>
    );
    
}
