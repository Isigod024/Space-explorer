import React from 'react';
import SectionForm from './SectionForm';
import ImageForm from './ImageForm';
import AuthorsForm from './AuthorsForm';
import styles from './ArticleForm.module.css';

export default function ArticleForm({ article, onArticleChange, onSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onArticleChange({ ...article, [name]: value });
    };

    const handleImageChange = (image) => {
        onArticleChange({ ...article, image_principale: image });
    };

    const handleSectionChange = (index, section) => {
        const newSections = [...article.contenus];
        newSections[index] = section;
        onArticleChange({ ...article, contenus: newSections });
    };

    const handleAddSection = () => {
        onArticleChange({ ...article, contenus: [...article.contenus, { titre: '', texte: '', image: { lien_image: '', titre_image: '', description_image: '' } }] });
    };

    const handleRemoveSection = (index) => {
        const newSections = article.contenus.filter((_, i) => i !== index);
        onArticleChange({ ...article, contenus: newSections });
    };

    const handleAuthorChange = (authors) => {
        onArticleChange({ ...article, auteurs: authors });
    };

    return (
        <form onSubmit={onSubmit} className={styles.articleForm}>
            <label>
                Titre de l&apos;article:
                <input type="text" name="titre" value={article.titre} onChange={handleChange} required />
            </label>
            <ImageForm image={article.image_principale} onImageChange={handleImageChange} />
            <h3>Sections de l&apos;article</h3>
            {article.contenus.map((section, index) => (
                <SectionForm
                    key={index}
                    section={section}
                    onSectionChange={(section) => handleSectionChange(index, section)}
                    onRemove={() => handleRemoveSection(index)}
                />
            ))}
            <button type="button" onClick={handleAddSection}>
                Ajouter une Section
            </button>
            <label>
                Date de publication:
                <input type="date" name="date_publication" value={article.date_publication} onChange={handleChange} required />
            </label>
            <AuthorsForm authors={article.auteurs} onAuthorsChange={handleAuthorChange} />
            <button type="submit">Ajouter l&apos;article</button>
        </form>
    );
}
