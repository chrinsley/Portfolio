import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Cocotte Chrinsley James. Built with
          Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
