import { useRouter } from 'next/router';
import articles from '@/data/articles.json'; 
import styles from './Article.module.css'; 

export default function ArticleDetail() {
    const router = useRouter();
    const { id } = router.query;
    const article = articles.find((article, index) => index.toString() === id);

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.imageContainer}>
                <img src={article.image} alt={article.title} />
            </div>
            <p className={styles.content}>{article.content}</p>
            <p className={styles.meta}>By {article.author} on {new Date(article.date).toLocaleDateString()}</p>
        </div>
    );
}
