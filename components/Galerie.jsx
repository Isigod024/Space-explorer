import Image from 'next/image';
import styles from '../Gallerie.module,css'
export default function Gallerie ( { image}) {


    return <div className={styles.gallerie}>
   
       {image.map((image, index) =>
       <Image
       key={index}
       src={image.src}
       alt={image.alt}
       width={image.width}
       height={image.height}
           />
       
    )}
    </div>
}


