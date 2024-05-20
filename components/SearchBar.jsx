import styles from './SearchBar.module.css'

export default function SearchBar() {
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
    )
  }
