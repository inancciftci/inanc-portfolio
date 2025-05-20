import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import { DockDemo } from "@/components/ui/dock";
import LangToggle from "@/components/ui/LangToggle";

export default function Home() {
  return (
    <main>
      <LangToggle />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <DockDemo />
    </main>
  );
}
