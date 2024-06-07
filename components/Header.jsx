// 
// import Image from 'next/image';
//
// import NavBar from './NavBar';
// import SearchBar from './Search';
// import { IoMdMenu } from "react-icons/io";

// export default function Header({ setPage }) {
//     return (
//         <header className={styles.header}>
            
//             <div className={styles.logoContainer}>
//                 <Image 
//                     src={logo} 
//                     alt="logo de notre site web"
//                     height={100}
//                     width={100}
//                     className={styles.logo}
//                 />
//                 <h1 className={styles.siteTitle}>SPACE EXPLORER</h1>
//                 <SearchBar />
//             </div>
            
//             <NavBar setPage={setPage}/>
//         </header>
//     );
// }

'use client'
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '@/public/Space_Explorer.webp';
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <li className={styles.navItem}><a href="#home">Accueil</a></li>
            <li className={styles.navItem}><a href="#about">À propos</a></li>
            <li className={styles.navItem}><a href="#classes">Cours</a></li>
            <li className={styles.navItem}><a href="#events">Événements</a></li>
            <li className={styles.navItem}><a href="#gallery">Galerie</a></li>
            <li className={styles.navItem}><a href="#Inscription">Inscription</a></li>
            <li className={styles.navItem}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    );
    
}
