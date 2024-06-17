// Header.jsx
'use client'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '@/public/Space_Explorer.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [navVisible, setNavVisible] = useState(false);
    const pathname = usePathname(); 

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    let lastScrollTop = 0;
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
                <Link href="/"><Image src={Logo} alt="Logo" className={styles.ImageLogo} /></Link>
                <h1>SPACE EXPLORER</h1>
            </div>
            <div className={`${styles.navContainer} ${navVisible ? styles.shownavContainer : ''}`}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={toggleNav}>
                                Accueil
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Galerie" className={pathname === '/Galerie' ? styles.active : ''} onClick={toggleNav}>
                                Galerie
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/AddArticle" className={pathname === '/AddArticle' ? styles.active : ''} onClick={toggleNav}>
                                Ajout d'article
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/connexion" className={pathname === '/connexion' ? styles.active : ''} onClick={toggleNav}>
                                Connexion
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Contact" className={pathname === '/Contact' ? styles.active : ''} onClick={toggleNav}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
