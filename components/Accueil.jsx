import styles from './Accueil.module.css';
import Citation from './Citation';
import Banniere from './Banniere';
import nebuleuse from '@/public/nebuleuse.webp'

import Timer from './Timer';
export default function Accueil() {
    return <>
        <Citation auteur=''>
            
        </Citation>

        <Banniere
        image={nebuleuse}
        title="Nebuleuse"
        description="Description"
        />
        
        <Timer/>
        <Timer compte={25}/>
        <Timer compte={10}/>
        <div className={styles.welcome}>
            
        </div>
    </>
}