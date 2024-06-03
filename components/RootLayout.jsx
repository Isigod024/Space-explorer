import React from 'react';
import NavBar from './NavBar'; 
import SearchBar from './SearchBar'; 
import styles from './layout.module.css'; 

export default function RootLayout({ children }) {
  const [page, setPage] = React.useState('accueil');

  return (
    <div className={styles.container}>
      <NavBar setPage={setPage} />
      <SearchBar />
      {children}
    </div>
  );
}
