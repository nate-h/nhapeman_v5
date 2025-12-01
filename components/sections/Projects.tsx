"use client";

import { useState, useEffect } from "react";
import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { Project } from "@/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Here are some of my favorite projects I've built just for fun. Fair warning: hobby code
          follows hobby rules — I promise my professional work is much cleaner ;)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-gradient-to-br from-slate-800/90 to-emerald-900/50 backdrop-blur-md rounded-xl border border-emerald-500/40 overflow-hidden hover:border-cyan-400/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/30 cursor-pointer"
            >
              <div
                className={`relative h-48 overflow-hidden flex items-center justify-center ${project.bgColor || "bg-slate-900"}`}
              >
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
                    <div className="text-white text-6xl opacity-30 font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-300">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-900/50 border border-emerald-500/30 text-emerald-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-emerald-300 hover:text-cyan-300 transition-colors"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-emerald-300 hover:text-cyan-300 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-900 to-emerald-950 border border-emerald-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-emerald-300 hover:text-cyan-300 text-2xl transition-colors z-10"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Header with gradient */}
            <div className="relative h-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose prose-invert prose-emerald max-w-none">
                {selectedProject.fullDescription ? (
                  <div>{selectedProject.fullDescription}</div>
                ) : (
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-emerald-500/20">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-emerald-400 hover:border-cyan-300 hover:bg-emerald-900/30 rounded-lg font-semibold transition-all text-emerald-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
