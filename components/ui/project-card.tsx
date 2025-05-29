import { Github, Globe, Link2, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

interface Project {
  id: number;
  poster: string;
  video: string;
  title: string;
  slug: string;
  subhead: string;
  currentlyBuilding?: boolean;
  github?: string;
  demo?: string;
  en: string;
  tr?: string;
  tools: string[];
  links?: string[];
  onlyLink?: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="hover:bg-slate-300 group flex flex-col p-4 gap-2 rounded-lg duration-300 relative">
      <div className="w-[100px] h-[100px] z-3 relative rounded-full overflow-hiddern">
        <Image
          src={project.poster}
          fill
          alt={project.title}
          className="rounded-full object-cover"
        />
      </div>
      <Link
        href={`/project/${project.slug}`}
        className="opacity-0 group-hover:opacity-100 absolute top-[52px] z-2 group-hover:translate-x-[120px] bg-primary px-2 py-1.5 pr-4 rounded-lg font-bold text-slate-800 flex duration-500 items-center gap-2"
      >
        <MoveRight size={15} />
        <span>Details</span>
      </Link>
      <h3 className="text-lg font-bold">{project.title}</h3>

      {project.currentlyBuilding ? (
        <div className="flex items-center gap-4 h-[30px]">
          <AnimatedShinyText className="rounded-lg">
            <span className="text-sm flex items-center gap-2">
              <div className="w-1 h-1 bg-amber-600 animate-ping rounded-full"></div>
              Currently Building
            </span>
          </AnimatedShinyText>
          {project.onlyLink && (
            <Link
              className="text-sm flex items-center gap-1 bg-slate-500 text-white px-2 rounded-lg py-1"
              href={project.onlyLink}
            >
              <Link2 size={15} /> <span>Demo</span>
            </Link>
          )}
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Link
            className="bg-slate-100 p-1 rounded-full"
            href={project.github || ""}
          >
            <Github size={20} />
          </Link>
          <Link
            className="bg-slate-100 p-1 rounded-full"
            href={project.demo || ""}
          >
            <Globe size={20} />
          </Link>
        </div>
      )}

      <p className="uppercase text-sm font-thin text-slate-500">
        {project.subhead}
      </p>
      <p className="text-sm">{project.description}</p>
      <div className="inline-flex flex-wrap gap-4 items-center">
        {project.tools.map((t) => (
          <i className={t + " text-slate-700 text-xl rounded-full"} key={t} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
