// components/Search.jsx

import React, { useState } from 'react';
import styles from './SearchBar.module.css'; 

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Gère la recherche ici (par exemple, appelle une fonction pour filtrer les données)
        onSearch(searchTerm);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
};

export default SearchBar;
