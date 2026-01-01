
export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  metrics?: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
