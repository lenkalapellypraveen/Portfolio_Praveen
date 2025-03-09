import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Praveen Lenkalapelly</h3>
            <p>Data Scientist | Data Engineer | AI Engineer | Machine Learning Engineer | Cloud Engineer</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/lenkalapellypraveen" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/praveen-lenkalapelly/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:praveen.lenkalapelly9@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Praveen Lenkalapelly. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};