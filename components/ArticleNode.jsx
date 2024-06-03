import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleNode.module.css';

export default function ArticleNode({ title, image, content, date, author, id }) {
    return (
        <div className={styles.articleCard}>
        <Link href={`/${id}`}>
            
                <div className={styles.imageContainer}>
                    <Image src={image} alt={title} layout="fill" objectFit="cover" />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.author}>By {author} on {new Date(date).toLocaleDateString()}</p>
           
        </Link>
        </div>
    );
}
