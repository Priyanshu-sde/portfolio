import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Terminal } from "@/components/Terminal";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />

        <Experience />
        <Projects />
        <Skills />

        {/* Interactive playground */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeader
            cmd="exec ./playground"
            title="Try the Shell"
            desc="This is a real little terminal. Type a command — start with 'help' — and explore."
          />
          <Terminal />
        </section>

        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
