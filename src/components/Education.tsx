import React from 'react';
import '../styles/Education.css';

interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  achievements?: string[];
}

export const Education: React.FC = () => {
  const educations: Education[] = [
    {
      id: 1,
      degree: "Masters",
      field: "Data Science",
      institution: "Florida Atlantic University",
      location: "Florida, USA",
      period: "2023 - 2024",
      achievements: [
        "GPA: 3.9/4.0",
        "Research focus: Deep learning applications in healthcare",
        "Relevant Coursework: Intro to Data Science, Business Analytics and Big Data, Data Mining and Machine Learning, Artificial Intelligence, Deep Learning, Database Management Systems, Information Retrieval, Natural Language Processing, Reinforcement Learning."
      ]
    },
    {
      id: 2,
      degree: "Bachelors",
      field: "Electronics and Communication Engineering",
      institution: "GRIET",
      location: "Hyderabad, India",
      period: "2017 - 2021",
      achievements: [
        "GPA: 3.3/4.0",
        "Capstone Project: IoT-based Health Monitoring System",
        "Related Courses: Data Structures and Algorithms, C Programming, Object Oriented Programming in JAVA, Computer Networks, Programming, Data Structures and Algorithms in Python, Digital Image Processing, Wireless Communications and Networks, Principles of Cloud Computing."
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-cards">
          {educations.map(edu => (
            <div key={edu.id} className="education-card">
              <div className="education-period">{edu.period}</div>
              
              <div className="education-content">
                <h3>{edu.degree} in {edu.field}</h3>
                <div className="institution">
                  <span className="institution-name">{edu.institution}</span>
                  <span className="institution-location">{edu.location}</span>
                </div>
                
                {edu.achievements && (
                  <ul className="achievements">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};