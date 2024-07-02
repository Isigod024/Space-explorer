'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '@/public/Space_Explorer.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import ToggleButton from './ToggleButton';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [navVisible, setNavVisible] = useState(false);
    const pathname = usePathname(); 
    const lastScrollTop = useRef(0);

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
                            <Link href="/Article" className={pathname === '/Article' ? styles.active : ''} onClick={toggleNav}>
                                Article
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Galerie" className={pathname === '/Galerie' ? styles.active : ''} onClick={toggleNav}>
                                Galerie
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/AddArticle" className={pathname === '/AddArticle' ? styles.active : ''} onClick={toggleNav}>
                                Ajout d&apos;article
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
                        <li className={styles.navItem}>
                            <ToggleButton />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
