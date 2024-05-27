import styles from './Header.module.css'
import Image from 'next/image'
import logo from '@/public/SpaceExplorerLogo.webp'
import NavBar from './NavBar'
import SearchBar from './Search'
import { IoMdMenu } from "react-icons/io";

export default function Header() {
return <header className={styles.header}>
    <Image 
        src = {logo} 
        alt = "logo de notre site web"
        height={100}
        width={100}
    />
    <h1>SPACE-EXPLORER</h1>
    <NavBar />
    <SearchBar />
    </header>
}
