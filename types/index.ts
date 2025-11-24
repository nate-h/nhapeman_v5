export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  fullDescription?: string;
  bgColor?: string;
}

export interface Skill {
  name: string;
  category: string;
  level?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Experience {
  id: string;
  company: string;
  logoUrl?: string;
  position: string;
  period: string;
  description: string;
  tags: string[];
}
