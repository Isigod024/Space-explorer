import styles from './Header.module.css'
import Image from 'next/image'
import logo from '@/public/react.webp'
import MenuNav from './MenuNav'
import { IoMdMenu } from "react-icons/io";

export default function Header() {
return <header className={styles.header}>
    <MenuNav />
    </header>
}