import React from "react";
import { Projects } from "./ui/ProjectsCarousel";

const ProjectsSection = () => {
  return (
    <div id="#projects" className="flex flex-col gap-4 mt-12">
      <h3 className="text-3xl font-bold container relative mb-2">
        Projects
        <span className="text-sm absolute -bottom-1 text-zinc-600 font-[300]">
          Hover on card for the project video.
        </span>
        <span className="h-[6px] w-[110px] bg-primary rounded-lg absolute bottom-3.5 left-25"></span>
      </h3>
      <Projects />
    </div>
  );
};

export default ProjectsSection;
