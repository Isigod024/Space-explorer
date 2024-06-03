"use client";
import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { FaHouseChimney } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function MenuNav({ setPage }) {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <div>
            <button className={styles.toggleButton} onClick={toggleNav}>
                {navVisible ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`${styles.nav} ${navVisible ? styles.showNav : ''}`}>
                <ul>
                    <li className={styles.navItem}><a href='#' onClick={() => setPage('accueil')}><FaHouseChimney /> Accueil</a></li>
                    <li className={styles.navItem}><a href='#' onClick={() => setPage('Galerie')}><FaCamera /> Galerie</a></li>
                    <li className={styles.navItem}><a href='#' onClick={() => setPage('Ajout d article')}><IoMdAddCircle /> Ajout d'article</a></li>
                    <li className={styles.navItem}><a href='#' onClick={() => setPage('connexion')}><IoMdContact /> Connexion</a></li>
                    <li className={styles.navItem}><a href="#" onClick={() => setPage('Contact')}><BsFillTelephoneFill /> Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}
