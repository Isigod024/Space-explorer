import React from 'react';
import styles from './ImageForm.module.css';

export default function ImageForm({ image, onImageChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onImageChange({ ...image, [name]: value });
    };

    return (
        <div className={styles.imageForm}>
            <label>
                Lien de l&apos;image:
                <input type="text" name="lien_image" value={image.lien_image} onChange={handleChange} required />
            </label>
            <label>
                Titre de l&apos;image:
                <input type="text" name="titre_image" value={image.titre_image} onChange={handleChange} required />
            </label>
            <label>
                Description de l&apos;image:
                <textarea name="description_image" value={image.description_image} onChange={handleChange} required />
            </label>
        </div>
    );
}
