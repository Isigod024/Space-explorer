import styles from './Header.module.css'
import Image from 'next/image'
import logo from '@/public/SpaceExplorerLogo.webp'
import NavBar from './NavBar'
import MenuNav from './MenuNav';

import SearchBar from './Search'
import { IoMdMenu } from "react-icons/io";

export default function Header({setPage}) {
return <header className={styles.header}>
    <div className={styles.title}>
        <Image
        scr={logo}
        alt="logo React"
        width={80}/>
    </div>
    <MenuNav setPage={setPage}/>

    </header>
}