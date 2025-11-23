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
      title: "Data Engineer II",
      company: "Travelpro",
      location: "United States",
      period: "Apr 2025 - Present",
      responsibilities: [
        "Architected enterprise-grade graph-centric pipelines with automated validation and retraining triggers, reducing downtime of recommendation and forecasting workflows by 25%.",
        "Built a Generative AI–driven customer intelligence pipeline using LLMs and embeddings, processing millions of product reviews to deliver analytics-ready insights and reduce research latency by 40%.",
        "Partnered with marketing teams to develop Bayesian A/B testing and multi-armed bandit datasets, accelerating personalization and reporting by 35%.",
        "Developed advanced time-series and causal inference pipelines for price elasticity and forecasting, improving inventory planning accuracy by 30%.",
        "Mentored engineers and analysts, standardizing feature engineering and documentation best practices to enhance team productivity and data quality."
      ],
      technologies: [
        "Python", "Neo4j", "LLMs", "OpenAI API", "Databricks", "Azure SQL", 
        "Delta Lake", "A/B Testing", "Bayesian Modeling", "Causal Inference", "Docker", "CI/CD"
      ]
    },
    {
      id: 2,
      title: "Data Engineer II",
      company: "Modak Analytics",
      location: "Hyderabad, India",
      period: "Mar 2022 - Jul 2024",
      responsibilities: [
        "Built and managed multi-terabyte e-commerce data pipelines using PySpark and Spark-Scala to support recommendation, demand forecasting, and pricing systems.",
        "Engineered time-series data pipelines for LSTM/Prophet models, reducing inventory costs by $600K+ and stockouts by 35%.",
        "Developed real-time pricing and reinforcement learning data workflows integrating competitor, demand, and inventory feeds, improving profit margins by 6.5%.",
        "Created LTV feature stores using survival analysis and Bayesian optimization, improving retention strategy outcomes by 18%.",
        "Automated model retraining and pipeline monitoring with CI/CD and Docker on AWS, ensuring continuous reliability and performance."
      ],
      technologies: [
        "Python", "PySpark", "Spark-Scala", "AWS", "Docker", "Prophet", "LSTM", 
        "Reinforcement Learning", "CI/CD", "Survival Analysis", "Databricks"
      ]
    },
    {
      id: 3,
      title: "Data Engineer",
      company: "Modak Analytics",
      location: "Hyderabad, India",
      period: "Apr 2021 - Mar 2022",
      responsibilities: [
        "Developed clustering-based segmentation datasets using DBSCAN and HDBSCAN, improving campaign targeting by 20%.",
        "Designed real-time cart abandonment detection pipelines integrating event streams and ensemble feature engineering, recovering $450K+ in lost sales.",
        "Built Bayesian experimentation and attribution pipelines using Markov Chain and Shapley value techniques, increasing ROAS by 31%.",
        "Created NLP-driven sentiment tagging systems leveraging BERT for user feedback insights, enabling faster product iteration.",
        "Split and modularized Databricks pipelines, reducing debugging and hotfix deployment time by 45%."
      ],
      technologies: [
        "Python", "Databricks", "PySpark", "HDBSCAN", "BERT", "Markov Chains",
        "Shapley Values", "Bayesian Models", "Azure", "NLP", "Real-Time Streaming"
      ]
    },
    {
      id: 4,
      title: "Associate Data Engineer",
      company: "Modak Analytics",
      location: "Hyderabad, India",
      period: "Oct 2020 - Apr 2021",
      responsibilities: [
        "Architected scalable ETL workflows in Modak Nabu and Azure Data Factory, increasing data warehousing accuracy by 20%.",
        "Developed fault-tolerant pipelines with validation checks, achieving 99% data quality and reducing processing time by 35%.",
        "Deployed serverless data migration workflows using AWS Lambda and Python, automating cross-system transfers and saving 50+ manual hours monthly.",
        "Enhanced orchestration with Python DAG schedulers, reducing pipeline latency by 35%.",
        "Built Databricks applications for JSON ingestion with completeness checks, preventing malformed data ingestion."
      ],
      technologies: [
        "Python", "Azure Data Factory", "AWS Lambda", "Databricks", "PySpark", 
        "Modak Nabu", "ETL", "Data Validation", "DAG Scheduling"
      ]
    },
    {
      id: 5,
      title: "Junior Data Analyst",
      company: "UST Global",
      location: "Hyderabad, India",
      period: "Jul 2020 - Oct 2020",
      responsibilities: [
        "Developed SQL-based analytical data models for KPI reporting and executive dashboards.",
        "Built interactive Tableau dashboards visualizing key banking metrics for product teams.",
        "Implemented GitHub-based version control to improve collaboration and code governance.",
        "Led data initiatives to define data requirements and ensure regulatory compliance.",
        "Supported cross-functional analytics projects through clean data modeling and visualization."
      ],
      technologies: [
        "SQL", "Tableau", "Python", "PostgreSQL", "Power BI", "GitHub", "Data Visualization"
      ]
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