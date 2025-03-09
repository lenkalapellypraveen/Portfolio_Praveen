import React from 'react';
import '../styles/Experience.css';

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export const Experience: React.FC = () => {
  // Note: This is placeholder experience data since the actual work experience 
  // wasn't included in the provided GitHub profile
  const experiences: WorkExperience[] = [
    {
      id: 1,
      title: "Data Scientist",
      company: "Modak Analytics",
      location: "Remote",
      period: "March 2022 - July 2024",
      responsibilities: [
        "Applied ML models to financial datasets, improving prediction accuracy by 30%",
        "Built Python ML pipelines with advanced modeling, reducing deployment time by 40%",
        "Created SQL dashboards with cloud tools, maintaining 99% data integrity",
        "Leveraged NLP on financial data with frameworks for scalable customer acquisition",
        "Presented statistical findings to executives, driving measurable revenue growth"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Statistical modeling", "SQL", "NLP (Natural Language Processing)", "Big data frameworks", "Cloud Technologies"]
    },
    {
      id: 2,
      title: "Associate Data Scientist",
      company: "Modak Analytics",
      location: "Remote",
      period: "April 2021 - March 2022",
      responsibilities: [
        "Created predictive models reducing financial fraud by 18%",
        "Applied statistical methods to banking data, increasing marketing ROI by 22%",
        "Implemented A/B testing frameworks across 3 product lines",
        "Automated reporting, reducing analysis time from 12 to 2 hours"
      ],
      technologies: ["Python", "R", "Scikit-learn", "Azure", "Spark", "MongoDB", "Predictive modeling", "Statistical analysis", "A/B testing", "Automated reporting", 
        "Data visualization"]
    },
    {
      id: 3,
      title: "Data Engineer",
      company: "Modak Analytics",
      location: "Remote",
      period: "October 2020 - April 2021",
      responsibilities: [
        "Built data pipelines using Modak Nabu and Azure, improving accuracy by 20%",
        "Designed ETL workflows reducing processing time by 35% with 99.9% data quality",
        "Configured AWS Lambda with CI/CD, saving 50+ manual hours monthly",
        "Optimized ETL with Python DAG schedulers, reducing processing time by 35%"
      ],
      technologies: ["Python", "PostgreSQL", "PySpark", "Spark-Scala", "ETL workflows", "Modak Nabu", "Azure Data Factory", "AWS Lambda", "CI/CD tools", "Data validation"]
    },
    {
      id: 4,
      title: "Junior Data Analyst",
      company: "UST Global",
      location: "Hyderabad, India",
      period: "July 2020 - October 2020",
      responsibilities: [
        "Created SQL queries to extract key metrics for executive dashboards",
        "Implemented GitHub version control to improve collaboration and code quality",
        "Built Tableau dashboards visualizing banking metrics",
        "Collaborated on data requirements and governance for regulatory compliance"
      ],
      technologies: ["Python", "PostgreSQL", "Tableau", "Power BI", "GitHub", "Data visualization"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map(job => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-period">{job.period}</span>
                </div>
                
                <div className="job-company">
                  <span className="company-name">{job.company}</span>
                  <span className="job-location">{job.location}</span>
                </div>
                
                <ul className="job-responsibilities">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                
                <div className="job-tech">
                  {job.technologies.map((tech, index) => (
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