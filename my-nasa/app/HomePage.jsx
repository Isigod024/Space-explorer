import React from 'react';
import SearchBar from '../components/Search';

const HomePage = () => {
    const handleSearch = (searchTerm) => {
        console.log('Termes de recherche:', searchTerm);
        // Ajoutez ici la logique pour gérer la recherche (par exemple, filtrer une liste de résultats)
    };

    return (
        <div>
            <h1>Accueil</h1>
            <SearchBar onSearch={handleSearch} />
            {/* Autres composants ou contenu */}
        </div>
    );
};

export default HomePage;
