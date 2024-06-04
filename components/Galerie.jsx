import React, { useState } from 'react';
import styles from './Galerie.module.css';

const Galerie = () => {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const handleAddImage = () => {
    if (imageUrl) {
      setImages([...images, { src: imageUrl }]);
      setImageUrl('');
    }
  };

  return (
    <div className={styles.galerieContainer}>
      <div className={styles.formContainer}>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
      <div className={styles.galerie}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Galerie;

