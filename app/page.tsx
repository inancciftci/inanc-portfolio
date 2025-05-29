import Certificates from "@/components/certificates";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="h-[1500px]">
      <HeroSection />
      <TechStack />
      <Projects />
      <Certificates />
    </div>
  );
}
