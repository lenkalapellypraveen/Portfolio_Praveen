import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

export const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${darkMode ? 'dark-mode' : 'light-mode'}`}
      onClick={toggleTheme} 
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <BsSunFill className="toggle-icon sun" />
      ) : (
        <FaMoon className="toggle-icon moon" />
      )}
      <span className="toggle-text">{darkMode ? 'Light' : 'Dark'}</span>
    </button>
  );
};