import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certifications.css';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
  badge: string;
}

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2023",
      link: "https://drive.google.com/file/d/1afT5f_o1wR9SNVJKyrGDoxKqC26mg0UV/view",
      badge: "microsoft-azure"
    },
    {
      id: 2,
      name: "Databricks Lakehouse Platform",
      issuer: "Databricks",
      date: "2023",
      link: "https://drive.google.com/file/d/1AXBM1AV8wi3LVV6ivrXXOwtvVBvTRG3v/view",
      badge: "databricks"
    },
    {
      id: 3,
      name: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "2022",
      link: "https://drive.google.com/file/d/1sNrxTUDEcWGc50gRWufBqfkiMaZ2ekwR/view",
      badge: "neo4j"
    },
    {
      id: 4,
      name: "Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      link: "https://drive.google.com/file/d/1Y1MH6WYgCGW2iRk9vtAFrygmYReHIyr5/view",
      badge: "microsoft-azure"
    },
    {
      id: 5,
      name: "Excel Purple Belt",
      issuer: "McGraw Hill",
      date: "2021",
      link: "https://certificates.simnetonline.com/b5e9a08c-97df-4d3a-8315-f2701a01d7fb#acc.pkXJMwcx",
      badge: "microsoft-excel"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="certification-icon">
                <FaCertificate />
              </div>
              
              <div className="certification-content">
                <h3>{cert.name}</h3>
                <div className="certification-details">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">{cert.date}</span>
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-certificate"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};