// app/layout.js
import React from 'react';
import Header from '../components/Header'; 
import '../styles/globals.css'; 
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;






