"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Animated stars background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                          radial-gradient(2px 2px at 60% 70%, white, transparent),
                          radial-gradient(1px 1px at 50% 50%, white, transparent),
                          radial-gradient(1px 1px at 80% 10%, white, transparent),
                          radial-gradient(2px 2px at 90% 60%, white, transparent),
                          radial-gradient(1px 1px at 33% 80%, white, transparent),
                          radial-gradient(1px 1px at 15% 55%, white, transparent)`,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%",
          opacity: 0.5,
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Left: Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/logos/me.jpg"
              alt="Nathanial Hapeman"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-emerald-400/50 shadow-lg shadow-emerald-500/30"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Nathanial Hapeman
            </h1>

            <p className="text-xl md:text-2xl text-emerald-200 mb-6">
              Full Stack Developer & Creative Problem Solver
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I'm a developer based in Los Angeles with over a decade of experience tackling
              challenging problems in geospatial visualization, machine learning, and quantum
              computing. I thrive on complex, interesting work and love collaborating with people
              from different disciplines to build something greater than the sum of its parts. I'm
              currently a Staff Software Engineer at HRL, leading development of an automated wafer
              testing framework. Day to day, I work in Python and TypeScript building instrument
              control systems and analyzing experimental data.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <a
                href="mailto:nhapeman@gmail.com"
                className="text-emerald-300 hover:text-cyan-300 transition-all duration-300 text-3xl hover:scale-110 transform"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
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
          </div>
        </div>
      </div>
    </section>
  );
}
