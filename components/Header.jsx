import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import nasaLogo from './nasa-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Gérer la recherche ici, par exemple, rediriger vers une page de résultats
    console.log('Recherche pour:', searchTerm);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={nasaLogo} alt="NASA Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/missions">Missions</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search..." 
          className={styles.searchInput} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </header>
  );
};

export default Header;
