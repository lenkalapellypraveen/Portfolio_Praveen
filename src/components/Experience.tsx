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
      title: "Data Engineer",
      company: "Publix",
      location: "United States",
      period: "Apr 2025 - Present",
      responsibilities: [
        "Designed and owned end-to-end analytics pipelines ingesting data from 5+ source systems into Databricks Delta Lake using a Bronze, Silver, and Gold (medallion) architecture, delivering near-real-time, trusted data for DTC eCommerce and marketing analysis.",
        "Designed and maintained OLTP-to-OLAP data pipelines, transforming transactional eCommerce and order data from operational systems into analytics-optimized fact and dimension models for reporting, performance analysis, and downstream consumption.",
        "Built Gold-layer fact and dimension models to support marketing and revenue analytics across multiple campaigns and product categories, enabling consistent and trusted metrics such as spend, revenue, ROAS, CAC, and conversion performance for business stakeholders.",
        "Built a customer intelligence enrichment pipeline that processed large volumes of customer reviews, Q&A, and feedback data, standardizing and clustering text content into interpretable themes to support product research, merchandising decisions, and marketing messaging.",
        "Partnered closely with marketing, analytics, and product teams to define metric definitions, attribution logic, and data contracts, ensuring consistent interpretation of KPIs and avoiding misalignment between dashboards and business decisions."
      ],
      technologies: [
        "Python", "PySpark", "Neo4j", "LLMs", "OpenAI API", "Databricks", "Azure SQL", 
        "Delta Lake", "Docker", "CI/CD"
      ]
    },
    {
      id: 2,
      title: "Data Engineer",
      company: "Albertsons Companies",
      location: "Hyderabad, India",
      period: "Apr 2021 - Jul 2023",
      responsibilities: [
        "Designed and built data ingestion and processing pipelines that supported warehouse operations, inventory visibility, and order fulfillment, handling batch workloads and near-real-time event streams, which enabled timely inventory updates for downstream systems.",
        "Implemented idempotent ingestion, archival, and retention strategies, including timestamp-based file tracking, archive folders, and cleanup policies, ensuring duplicate-safe reprocessing and consistent downstream state during retries and corrections.",
        "Modernized legacy hourly batch workflows into near–real-time streaming pipelines using Kafka, Databricks Structured Streaming, and Delta Lake, reducing order and shipment data latency from 1–2 hours to under a few minutes.",
        "Added operational monitoring and logging for batch and streaming pipelines, tracking metrics such as processing latency, Kafka lag, batch duration, and row counts, enabling proactive scaling and stable performance during peak warehouse activity.",
        "Automated model retraining and pipeline monitoring with CI/CD and Docker on AWS, ensuring continuous reliability and performance."
      ],
      technologies: [
        "Python", "PySpark", "Databricks", "Docker", "CI/CD", "Azure SQL"
      ]
    },
    {
      id: 3,
      title: "Data Engineer",
      company: "Bristol Myers Squibb",
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
      id: 4,
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
