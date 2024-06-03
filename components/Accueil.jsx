import galaxyGif from '@/public/Galaxy.gif';
import ArticleNode from './ArticleNode';
import articles from '@/data/articles.json';
import Image from 'next/image';
import styles from './Accueil.module.css';

export default function Accueil() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={galaxyGif} alt="Galaxy" layout="fill" objectFit="cover" />
            </div>
            <h1 className={styles.mainTitle}>Bienvenue sur SPACE EXPLORER</h1>
            <p className={styles.mainText}>Découvrez de nombreux articles, faits et images en rapport avec l'actualité spatiale</p>
            <div className={styles.articleSection}>
                <h2 className={styles.articleTitle}>Articles</h2>
                <div className={styles.articleGrid}>
                    {articles.map((article, index) => (
                        <ArticleNode 
                            key={index}
                            id={index.toString()}
                            title={article.title}
                            image={article.image}
                            content={article.content}
                            date={article.date}
                            author={article.author}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}