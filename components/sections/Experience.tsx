"use client";

import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="w-full relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          My professional journey across various companies and technologies.
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-br from-slate-800/90 to-emerald-900/50 backdrop-blur-md rounded-xl p-6 border border-emerald-500/40 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-slate-900/80 rounded-lg border border-emerald-500/40 flex items-center justify-center overflow-hidden">
                    {job.logoUrl ? (
                      <img
                        src={job.logoUrl}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-emerald-400">
                        {job.company.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-1">
                      {job.company}
                    </h3>
                    <p className="text-emerald-300 font-medium mb-1">
                      {job.position}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {job.period}
                    </p>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
