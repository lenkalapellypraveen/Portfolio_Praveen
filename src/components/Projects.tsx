import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Genomic Ancestry Prediction System",
      description: "Custom Ridge Logistic Regression model for ancestry prediction using 50,000+ SNP genomic data. Implements advanced regularization with k-fold cross-validation, achieving 20% higher predictive accuracy than standard approaches.",
      image: "https://github.com/lenkalapellypraveen/Project_images/blob/main/ancestry_image.jpg?raw=true",
      technologies: ["Python", "NumPy", "Scikit-learn", "Matplotlib", "Custom Gradient Descent"],
      githubLink: "https://github.com/lenkalapellypraveen/Genomic-Ancestry-Prediction-through-Advanced-Machine-Learning-Integration"
    },
    {
      id: 2,
      title: "Credit Card Balance Prediction",
      description: "Regularization-based regression analysis to predict credit card balances. Implemented Elastic Net, Ridge, and Lasso regression with hyperparameter tuning, achieving R² values above 0.95.",
      image: "https://github.com/lenkalapellypraveen/Project_images/blob/main/credit_card_image.jpg?raw=true",
      technologies: ["Python", "Pandas", "Scikit-learn", "Regularization Techniques", "Statistical Modeling"],
      githubLink: "https://github.com/lenkalapellypraveen/Credit-Balance-Predictor-Optimizing-Financial-Risk-Assessment-with-Regularized-Regression"
    },
    {
      id: 3,
      title: "Real-Time Weather Prediction System",
      description: "Linear Regression ensemble for weather forecasting with API integration. Processes 5+ years of historical time-series data, improving forecast precision by 18% and accuracy by 27%.",
      image: "https://github.com/lenkalapellypraveen/Project_images/blob/main/Weather_Prediction_image.jpg?raw=true",
      technologies: ["Python", "Scikit-learn", "AWS Lambda", "REST APIs", "Pandas", "Matplotlib"],
      githubLink: "https://github.com/lenkalapellypraveen/Real-Time-Weather-prediction-with-API-Integration"
    },
    {
      id: 4,
      title: "Brain Tumor Segmentation & Detection",
      description: "U-Net based deep learning model for automated segmentation of brain tumors from FLAIR MRI images. Implemented with custom loss functions to handle class imbalance, deployed as a Flask API.",
      image: "https://github.com/lenkalapellypraveen/Project_images/blob/main/Brain_Tumor_image.png?raw=true",
      technologies: ["TensorFlow", "Keras", "Flask", "OpenCV", "Superpixel Technology"],
      githubLink: "https://github.com/lenkalapellypraveen/Automated-Brain-Tumor-Segmentation-and-Detection-Using-Deep-Neural-Networks-on-FLAIR-MRI"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FaGithub /> Code
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};