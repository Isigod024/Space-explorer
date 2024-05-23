"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/SpaceExplorerLogo.webp';
import NavBar from './NavBar';
import SearchBar from './Search';

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${showHeader ? '' : styles.hide}`}>
            <Image 
                src={logo} 
                alt="logo de notre site web"
                height={100}
                width={100}
            />
            <h1>SPACE-EXPLORER</h1>
            <NavBar />
            <SearchBar />
        </header>
    );
}
