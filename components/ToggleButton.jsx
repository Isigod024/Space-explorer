<<<<<<< HEAD
// components/ToggleButton.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
=======
'use client'
import { useState, useEffect } from 'react';
import styles from './ToggleButton.module.css';
>>>>>>> da567c824bf646bce9dfd14b7d800f50b689df11

const ToggleButton = () => {
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation();

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? t('dark_mode') : t('light_mode')}
    </button>
  );
};

export default ToggleButton;
