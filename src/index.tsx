import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';
import './styles/Header.css';
import './styles/About.css';
import './styles/Profile.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Experience.css';
import './styles/Education.css';
import './styles/Certifications.css';
import './styles/Contact.css';
import './styles/Footer.css';
import './styles/ThemeToggle.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);