"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="w-full relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I work with.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gradient-to-br from-slate-800/90 to-emerald-900/50 backdrop-blur-md rounded-xl p-6 border border-emerald-500/40 hover:border-teal-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-300 border-b-2 border-gradient-to-r from-purple-500 to-pink-500 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-emerald-900/40 border border-emerald-400/30 text-emerald-200 rounded-lg hover:bg-emerald-800/50 hover:border-cyan-400/50 hover:text-cyan-200 transition-all text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
