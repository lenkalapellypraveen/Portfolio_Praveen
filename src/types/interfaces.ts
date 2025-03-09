export interface Skill {
    name: string;
    level: number; // 1-5
    color: string;
  }
  
  export interface SkillCategory {
    name: string;
    skills: Skill[];
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
  }
  
  export interface WorkExperience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    technologies: string[];
  }
  
  export interface Education {
    id: number;
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
    achievements?: string[];
  }
  
  export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    link: string;
    badge: string;
  }