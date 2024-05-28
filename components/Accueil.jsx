import styles from './Accueil.module.css';
import Citation from './Citation';

import Timer from './Timer';
export default function Accueil() {
    return <>
        <Citation auteur=''>
            
        </Citation>
        
        <Timer/>
        <Timer compte={25}/>
        <Timer compte={10}/>
        <div className={styles.welcome}>
            
        </div>
    </>
}