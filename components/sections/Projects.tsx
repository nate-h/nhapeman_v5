"use client";

import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="w-full relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-slate-800/90 to-emerald-900/50 backdrop-blur-md rounded-xl border border-emerald-500/40 overflow-hidden hover:border-cyan-400/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <div className="relative h-48 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-30 font-bold">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

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
    </section>
  );
}
