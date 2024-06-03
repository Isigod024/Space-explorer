import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/Space_Explorer.webp';
import NavBar from './NavBar';
import SearchBar from './Search';
import { IoMdMenu } from "react-icons/io";

export default function Header({ setPage }) {
    return (
        <header className={styles.header}>
            
            <div className={styles.logoContainer}>
                <Image 
                    src={logo} 
                    alt="logo de notre site web"
                    height={100}
                    width={100}
                    className={styles.logo}
                />
                <h1 className={styles.siteTitle}>SPACE EXPLORER</h1>
                <SearchBar />
            </div>
            
            <NavBar />
        </header>
    );
}
