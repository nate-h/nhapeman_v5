"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="w-full relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                          radial-gradient(2px 2px at 60% 70%, white, transparent),
                          radial-gradient(1px 1px at 50% 50%, white, transparent),
                          radial-gradient(1px 1px at 80% 10%, white, transparent),
                          radial-gradient(2px 2px at 90% 60%, white, transparent),
                          radial-gradient(1px 1px at 33% 80%, white, transparent),
                          radial-gradient(1px 1px at 15% 55%, white, transparent)`,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
        opacity: 0.5
      }}></div>

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center z-10">
        <div className="mb-8">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="/logos/me.jpg"
              alt="Nathanial Hapeman"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-emerald-400/50 shadow-lg shadow-emerald-500/30"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Nathanial Hapeman
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200 mb-6">
            Full Stack Developer & Creative Problem Solver
          </p>
        </div>

        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm usually doing full stack development for my job but like tinkering
          with all sorts of domains for fun. Passionate about creating innovative
          solutions from computer vision to music visualization.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
          <a
            href="mailto:nhapeman@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
          >
            <FaEnvelope className="text-emerald-400" />
            <span>nhapeman@gmail.com</span>
          </a>
          <span className="hidden sm:block text-slate-600">&bull;</span>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-emerald-400" />
            <span>Los Angeles</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/nate-h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-cyan-300 transition-all duration-300 text-3xl hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nhapeman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-cyan-300 transition-all duration-300 text-3xl hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:shadow-emerald-400/50 hover:scale-105 transform"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
