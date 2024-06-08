import React from 'react';
import ImageForm from './ImageForm';
import styles from './SectionForm.module.css';

export default function SectionForm({ section, onSectionChange, onRemove }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onSectionChange({ ...section, [name]: value });
    };

    const handleImageChange = (image) => {
        onSectionChange({ ...section, image });
    };

    return (
        <div className={styles.sectionForm}>
            <label>
                Titre de la section:
                <input type="text" name="titre" value={section.titre} onChange={handleChange} required />
            </label>
            <label>
                Texte de la section:
                <textarea name="texte" value={section.texte} onChange={handleChange} required />
            </label>
            <ImageForm image={section.image} onImageChange={handleImageChange} />
            <button type="button" onClick={onRemove} className={styles.removeButton}>Supprimer cette section</button>
        </div>
    );
}
