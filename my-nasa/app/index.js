// pages/index.js
import React from 'react';
import Layout from '../app/layout';  // Assurez-vous que ce chemin est correct
import SearchBar from '../components/Search'; // Chemin vers le composant Search

const Home = () => {
  return (
    <Layout>
      <h1>Accueil</h1>
      <SearchBar onSearch={(term) => console.log('Recherche pour:', term)} />
      {/* Autres composants ou contenu */}
    </Layout>
  );
};

export default Home;
