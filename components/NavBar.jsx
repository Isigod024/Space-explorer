import styles from './NavBar.module.css'
import { FaHouseChimney } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li><a href='#'><FaHouseChimney/> Accueil</a></li>
            <li><a href='#'><FaCamera/> Galerie</a></li>
            <li><a href='#'><IoMdAddCircle/> Ajout d'article</a></li>
            <li><a href='#'><FaFileAlt/> Article</a></li>
            <li><a href='#'><IoMdContact/> Connexion</a></li>
            <li><a href="#"><BsFillTelephoneFill/> Contact</a></li>
        </ul>
    </nav>
}