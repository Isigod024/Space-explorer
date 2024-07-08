'use client'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ToggleButton.module.css';

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
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {theme === 'light' ? t('dark_mode') : t('light_mode')}
    </button>
  );
};

export default ToggleButton;
