import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Books from "@/components/sections/Books";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Books />
      <Footer />
    </div>
  );
}
