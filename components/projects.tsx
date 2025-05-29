import { projects } from "@/lib/project";
import Image from "next/image";
import React from "react";
import ProjectCard from "./ui/project-card";

const Projects = () => {
  return (
    <section id="projects" className="container md:mt-15 max-sm:mt-45">
      <div className="flex flex-col gap-6 relative">
        <Image
          src={"/dev.gif"}
          width={300}
          height={300}
          alt="Projects Gif"
          className="absolute md:right-0 rotate-45 md:scale-90 max-sm:-top-60 max-sm:scale-75 max-sm:rotate-145 max-sm:-right-10"
        />
        <h3 className="text-3xl  font-bold relative">
          Projects
          <div className="w-[90px] h-[5px] absolute -bottom-1 left-16 rounded-lg bg-primary"></div>
        </h3>
        <p className="text-muted-foreground font-thin max-w-[450px]">
          Here are some of the full-stack projects I’ve built using React,
          Next.js, TypeScript, and Supabase. Each one taught me something
          new—whether it was API integration, database design, or improving UX.
          I&apos;m always exploring new ideas and ways to build smarter, cleaner
          apps.
        </p>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:p-4 gap-10 md:p-10 md:pt-20 bg-slate-200 rounded-lg">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
