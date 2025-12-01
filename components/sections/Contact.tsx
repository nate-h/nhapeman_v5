"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="w-full relative py-20 text-white">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Let's Connect</h3>
            <p className="text-slate-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you
              have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:nhapeman@gmail.com"
                    className="text-emerald-200 hover:text-cyan-300 transition-colors"
                  >
                    nhapeman@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-emerald-200">Los Angeles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder-slate-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:from-slate-600 disabled:to-slate-700 rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:scale-105 transform"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Sent!"
                    : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-cyan-300 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
