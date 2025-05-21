import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import LangToggle from "@/components/ui/LangToggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="flex items-center gap-4 absolute top-0 right-10">
        <LangToggle /> <ThemeToggle />
      </div>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
