import { Project, Skill, Experience } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Whirling",
    description: "A music visualizer leveraging audio feature extraction and segmentation to generate representative visuals. Analyzes audio characteristics to create dynamic, synchronized visual effects.",
    imageUrl: "/projects/whirling.jpg",
    technologies: ["Python", "Audio Processing", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/nate-h/Whirling",
  },
  {
    id: "2",
    title: "Drone Command & Control",
    description: "A simulated drone command and control platform featuring real-time drone management, mission planning, and telemetry visualization. Full stack implementation with modern web technologies.",
    imageUrl: "/projects/drone-c2.jpg",
    technologies: ["React", "TypeScript", "Golang", "WebSockets"],
    githubUrl: "https://github.com/nate-h/drone-c2",
  },
  {
    id: "3",
    title: "Image Effects",
    description: "Computer vision examples that recreate Photoshop-like effects and demonstrate innovative image processing techniques. Includes various filters, transformations, and artistic effects.",
    imageUrl: "/projects/image-effects.jpg",
    technologies: ["Python", "OpenCV", "Jupyter Notebook", "NumPy"],
    githubUrl: "https://github.com/nate-h/image-effects",
  },
  {
    id: "4",
    title: "Pacman JS",
    description: "A JavaScript implementation of the classic Pacman game. Optimized to run at 30 FPS by only rendering changes instead of the entire level each frame. Features intelligent ghost AI.",
    imageUrl: "/projects/pacman.jpg",
    technologies: ["JavaScript", "HTML5 Canvas", "Game Development"],
    githubUrl: "https://github.com/nate-h/pacman_js",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "HTML5 Canvas", category: "Frontend" },

  // Backend
  { name: "Golang", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "WebSockets", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Computer Vision & ML
  { name: "OpenCV", category: "Specialized" },
  { name: "Computer Vision", category: "Specialized" },
  { name: "Audio Processing", category: "Specialized" },
  { name: "NumPy", category: "Specialized" },
  { name: "Jupyter", category: "Specialized" },

  // Tools & Others
  { name: "Git", category: "Tools" },
  { name: "C++", category: "Tools" },
  { name: "OpenGL", category: "Tools" },
  { name: "Game Development", category: "Tools" },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "HRL Laboratories",
    logoUrl: "/logos/hrl.png",
    position: "Full Stack Engineer",
    period: "July 2021 - Present",
    description: "Award recipient of the 2024 HRL Award for 'Work Excellence by an individual or Team on Critical Programs'. Full stack developer on quantum device testing frameworks, building multiple web applications for visualization and acquisition of large-scale quantum data. Developed zoomable, interactive JavaScript canvas applications for data analysis. Led development of a Python-based automated wafer probing framework that doubled testing throughput compared to the previous system. The framework emphasizes exceptional UX without compromising test speed, includes instrument demos for faster onboarding, mocked instruments for production testing and faster development, multi-system support per computer, and composite SMU capabilities.",
    tags: ["Full Stack", "Python", "Vue.js", "React", "TypeScript", "Hardware Integration", "Data Visualization"],
  },
  {
    id: "2",
    company: "Applied Invention",
    logoUrl: "/logos/applied-invention.png",
    position: "Software Engineer",
    period: "June 2014 - June 2021",
    description: "Worked on diverse challenging projects helping leading companies solve complex problems. Developed an in-house geo-spatial game engine built with C++ on Panda3D. Created and maintained an internal annotation website for machine learning projects, managing multi-stage data pipelines and providing data analysis insights. Responsibilities included full stack development, data science, and machine learning.",
    tags: ["Full Stack", "Simulation / Game Development", "Machine Learning", "Data Science"],
  },
  {
    id: "3",
    company: "FrackOptima",
    logoUrl: "/logos/frackoptima.png",
    position: "Software Engineer (Part-time)",
    period: "May 2016 - October 2017",
    description: "Part-time software engineer for a hydraulic fracturing company specializing in software and services for optimal hydraulic fracturing treatments. Primarily worked on the company website and fracking simulator while maintaining full-time position at Applied Invention.",
    tags: ["Full Stack"],
  },
];
