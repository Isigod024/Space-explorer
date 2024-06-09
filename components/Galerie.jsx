// import React, { useState } from 'react';
// import styles from './Galerie.module.css';

// const Galerie = () => {
//   const [images, setImages] = useState([]);
//   const [imageUrl, setImageUrl] = useState('');

//   const handleAddImage = () => {
//     if (imageUrl) {
//       setImages([...images, { src: imageUrl }]);
//       setImageUrl('');
//     }
//   };

//   return (
//     <div className={styles.galerieContainer}>
//       <div className={styles.formContainer}>
//         <input
//           type="text"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//           placeholder="Enter image URL"
//         />
//         <button onClick={handleAddImage}>Add Image</button>
//       </div>
//       <div className={styles.galerie}>
//         {images.map((image, index) => (
//           <img key={index} src={image.src} alt={`Image ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Galerie;

// gallery.js
// Galerie.jsx
// Galerie.jsx
// Galerie.jsx
// Galerie.jsx
// Galerie.jsx

'use client'
import React, { useState } from 'react';
import articles from '../data/articles';
import styles from './Galerie.module.css';

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = articles.articles.reduce((acc, article) => {
    acc.push(article.image_principale);
    article.contenus.forEach(content => {
      if (content.image) acc.push(content.image);
    });
    return acc;
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.card} onClick={() => handleImageClick(image)}>
            <img src={image.lien_image} alt={image.titre_image} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles.overlay} onClick={closeImage}>
          <div className={styles.largeImageContainer}>
            <img className={styles.largeImage} src={selectedImage.lien_image} alt={selectedImage.titre_image} />
            <div className={styles.imageInfo}>
              <h2>{selectedImage.titre_image}</h2>
              <p>{selectedImage.description_image}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galerie;
