import React, { useState } from 'react';
import '../styles/Skills.css';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
  color: string;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 5, color: "#3776AB" },
        { name: "R", level: 4, color: "#276DC3" },
        { name: "Scala", level: 3, color: "#DC322F" },
        { name: "Java", level: 3, color: "#ED8B00" },
        { name: "JavaScript", level: 3, color: "#F7DF1E" },
        { name: "C", level: 2, color: "#00599C" },
        { name: "C#", level: 2, color: "#239120" },
        { name: "Bash", level: 3, color: "#4EAA25" },
      ]
    },
    {
      name: "Machine Learning & Data Science",
      skills: [
        { name: "TensorFlow", level: 4, color: "#FF6F00" },
        { name: "PyTorch", level: 4, color: "#EE4C2C" },
        { name: "Keras", level: 4, color: "#D00000" },
        { name: "scikit-learn", level: 5, color: "#F7931E" },
        { name: "NumPy", level: 5, color: "#013243" },
        { name: "SciPy", level: 4, color: "#8CAAE6" },
        { name: "Pandas", level: 5, color: "#150458" },
        { name: "ggplot2", level: 4, color: "#FC4E07" },
        { name: "dplyr", level: 4, color: "#2165AE" },
        { name: "caret", level: 3, color: "#00589C" },
      ]
    },
    {
      name: "Deep Learning Models",
      skills: [
        { name: "CNN", level: 4, color: "#FF6F00" },
        { name: "RNN", level: 4, color: "#EE4C2C" },
        { name: "LSTM", level: 4, color: "#D00000" },
        { name: "Transformers", level: 4, color: "#FFD700" },
      ]
    },
    {
      name: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 4, color: "#0089D6" },
        { name: "Azure", level: 4, color: "#0089D6" },
        { name: "GCP", level: 3, color: "#4285F4" },
        { name: "Snowflake", level: 3, color: "#29B5E8" },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", level: 4, color: "#336791" },
        { name: "MySQL", level: 4, color: "#4479A1" },
        { name: "SQL Server", level: 3, color: "#CC2927" },
        { name: "Oracle", level: 3, color: "#F80000" },
        { name: "MongoDB", level: 3, color: "#47A248" },
        { name: "DynamoDB", level: 3, color: "#4053D6" },
        { name: "Neo4j", level: 4, color: "#008CC1" },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);
  
  const displayedSkills = activeCategory === "All" 
    ? allSkills 
    : skillCategories.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-filter">
          <button 
            className={activeCategory === "All" ? "active" : ""} 
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {skillCategories.map(category => (
            <button 
              key={category.name}
              className={activeCategory === category.name ? "active" : ""} 
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ borderTop: `3px solid ${skill.color}` }}>
              <h3>{skill.name}</h3>
              <div className="skill-level">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`level-dot ${i < skill.level ? "filled" : "empty"}`}
                    style={{ backgroundColor: i < skill.level ? skill.color : "transparent" }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};