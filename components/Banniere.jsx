import React from 'react';
import Image from 'next/image';
import styles from './Banniere.Module.css';

export default function Banniere({ image, title, description, height }) {
  return (
    <div className={styles.banniere} style={{ backgroundImage: {image} }}>
      <div className={styles.content}>
        
        <h1 className={styles.title}>{title}
        <Image src = {image} height={height}>
            
        </Image></h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
