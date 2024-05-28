import React from 'react';
import MenuNav from './MenuNav'; 
import SearchBar from './SearchBar'; 
import styles from './layout.module.css'; 

export default function RootLayout({ children }) {
  const [page, setPage] = React.useState('accueil');

  return (
    <div className={styles.container}>
      <MenuNav setPage={setPage} />
      <SearchBar />
      {children}
    </div>
  );
}
