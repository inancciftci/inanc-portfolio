// import AboutMe from "@/components/about/AboutMe";
import Hero from "@/components/hero";
import ProjectSection from "@/components/projectsHome/ProjectSection";
// import ProjectsSeperator from "@/components/projectsHome/ProjectsSeperator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Inanc Ciftci",
};

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <ProjectsSeperator /> */}
      <ProjectSection />
      {/* <AboutMe /> */}
    </div>
  );
}
