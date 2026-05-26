import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import BentoGrid from "@/components/sections/BentoGrid";
import ButCompetencies from "@/components/sections/ButCompetencies";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Manifesto from "@/components/sections/Manifesto";
import Contact from "@/components/sections/Contact";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <Sidebar />
      <Hero />
      <Introduction />
      <BentoGrid />
      <Timeline />
      <Projects />
      <ButCompetencies />
      <Manifesto />
      <Contact />
    </main>
  );
}
