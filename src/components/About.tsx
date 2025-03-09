import React from 'react';
import '../styles/About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-description">
            Research-oriented Data Scientist with 4+ years of experience implementing statistical models and ML algorithms across healthcare and financial sectors. Proficient in Python, mathematical modeling, and cloud technologies with proven success translating complex data into actionable insights for cross-functional teams.
          </p>
          
          <div className="focus-grid">
            <div className="focus-card" style={{ borderTop: '3px solid var(--data-scientist-color)' }}>
              <h3>Currently working on:</h3>
              <p>A personalized recommendation system using LLMs and retrieval-augmented generation with LangChain and vector databases (Pinecone, Weaviate) for domain-specific applications.</p>
            </div>
            
            <div className="focus-card" style={{ borderTop: '3px solid var(--ai-engineer-color)' }}>
              <h3>Learning:</h3>
              <p>GenAI, Agentic AI frameworks, LLM fine-tuning with PEFT/LoRA, and prompt engineering for enterprise data applications.</p>
            </div>
            
            <div className="focus-card" style={{ borderTop: '3px solid var(--ml-engineer-color)' }}>
              <h3>Looking to collaborate on:</h3>
              <p>Open-source healthcare and financial ML projects utilizing multimodal models and real-time serving architectures.</p>
            </div>
            
            <div className="focus-card" style={{ borderTop: '3px solid var(--data-engineer-color)' }}>
              <h3>Ask me about:</h3>
              <p>Advanced ML modeling, MLOps best practices, Python data stack, statistical analysis, NLP, and data pipeline optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};