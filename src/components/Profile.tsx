import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Profile.css';

export const Profile: React.FC = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-content">
          <h1 className="profile-name">Hi, I'm Praveen Lenkalapelly</h1>
          
          <div className="role-badges">
            <span className="badge data-scientist">Data Scientist</span>
            <span className="badge data-engineer">Data Engineer</span>
            <span className="badge ai-engineer">AI Engineer</span>
            <span className="badge ml-engineer">Machine Learning Engineer</span>
            <span className="badge cloud-engineer">Cloud Engineer</span>
          </div>
          
          <p className="profile-description">
           Seeking data science roles to apply my statistical modeling and ML expertise across healthcare and finance. Ready to translate complex data into actionable business insights that drive measurable growth and strategic decision-making.
          </p>
          
          <div className="social-links">
            <a href="https://github.com/lenkalapellypraveen" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/praveen-lenkalapelly/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:praveen.lenkalapelly9@gmail.com" className="social-link email">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
        
        <div className="profile-image">
          <div className="profile-placeholder">
            <div className="initials">PL</div>
          </div>
        </div>
      </div>
    </section>
  );
};