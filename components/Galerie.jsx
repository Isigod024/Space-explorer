'use client';
import React, { useState, useEffect } from 'react';
import articles from '../data/articles';
import styles from './Galerie.module.css';
import Image from 'next/image';

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userImages, setUserImages] = useState([]);
  const [newImage, setNewImage] = useState({
    lien_image: '',
    titre_image: '',
    description_image: ''
  });

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('userImages'));
    if (storedImages) {
      setUserImages(storedImages);
    }
  }, []);

  const images = articles.articles.reduce((acc, article) => {
    if (article.image_principale && article.image_principale.lien_image) {
      acc.push(article.image_principale);
    }
    if (Array.isArray(article.contenus)) {
      article.contenus.forEach(content => {
        if (content.image && content.image.lien_image) {
          acc.push(content.image);
        }
      });
    }
    return acc;
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newImage.lien_image && newImage.titre_image && newImage.description_image) {
      const updatedImages = [...userImages, newImage];
      setUserImages(updatedImages);
      localStorage.setItem('userImages', JSON.stringify(updatedImages)); // Enregistrer dans le stockage local
      setNewImage({
        lien_image: '',
        titre_image: '',
        description_image: ''
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {[...images, ...userImages].map((image, index) => (
          <div key={index} className={styles.card} onClick={() => handleImageClick(image)}>
            <Image src={image.lien_image} alt={image.titre_image}  height={1000} width={1000}/>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles.overlay} onClick={closeImage}>
          <div className={styles.largeImageContainer}>
            <Image className={styles.largeImage} src={selectedImage.lien_image} alt={selectedImage.titre_image}  height={1000} width={1000}/>
            <div className={styles.imageInfo}>
              <h2>{selectedImage.titre_image}</h2>
              <p>{selectedImage.description_image}</p>
            </div>
          </div>
        </div>
      )}
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h2>Ajouter une Nouvelle Image</h2>
        <input
          type="text"
          name="lien_image"
          value={newImage.lien_image}
          onChange={handleInputChange}
          placeholder="URL de l'image"
          required
        />
        <input
          type="text"
          name="titre_image"
          value={newImage.titre_image}
          onChange={handleInputChange}
          placeholder="Titre"
          required
        />
        <textarea
          name="description_image"
          value={newImage.description_image}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <button type="submit">Ajouter une image</button>
      </form>
    </div>
  );
};

export default Galerie;

