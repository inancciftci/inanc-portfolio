import { GithubIcon, LinkIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionLink from "../transitionLink";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
  link: string;
  hasLink?: boolean;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="max-md:relative grid grid-cols-[1fr_auto] max-md:grid-cols-1 items-center gap-15 p-6 rounded-md shadow-[#60d4a4] shadow-[0_0_15px_1px] relative">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-md text-slate-400">{project.description}</p>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-slate-200">Tools: </span>
          {project.techStack.map((tech, i) => (
            <i key={i} className={`${tech} text-white text-xl`}></i>
          ))}
        </div>
        <div className="flex max-md:flex-col-reverse max-md:items-start max-md:gap-4 justify-between items-center">
          {project.hasLink && (
            <TransitionLink
              customClass="py-3 px-6 bg-gradient-to-br from-[#60d4a4]/70 via-[#4c9474]/50 to-slate-600 rounded-lg flex items-center gap-4"
              href={project.link}
            >
              <MoveRightIcon className="w-[15px]" />
              View Details
            </TransitionLink>
          )}
          <div className="flex flex-col gap-2">
            <Link
              className=" cursor-crosshair flex items-center gap-1 text-slate-400 text-sm underline underline-offset-1"
              href={project.demo}
            >
              <LinkIcon className=" w-[15px] h-[15px]" /> Open Live Demo
            </Link>
            <Link
              className=" cursor-crosshair flex items-center gap-1 text-slate-400 text-sm underline underline-offset-1"
              href={project.github}
            >
              <GithubIcon className=" w-[15px] h-[15px]" /> Open Repo
            </Link>
          </div>
        </div>
      </div>
      <div className="relative max-md:absolute max-sm:right-[-1rem] max-sm:top-[-6rem] max-md:right-[-3rem] max-md:top-[-9rem]">
        <div className="bg-blue-300 w-[260px] h-[173px] max-sm:w-[130px] max-sm:h-[87px] rounded-[3px] absolute top-[9px] left-[50px] max-sm:top-[4px] max-sm:left-[25px] z-[1] overflow-hidden">
          <Image
            src={project.image}
            className="object-cover object-top"
            alt={project.title}
            fill
          />
        </div>

        <div className="h-[220px] w-[360px] max-sm:h-[110px] max-sm:w-[180px] relative">
          <Image src={"/mockup.png"} alt={project.title} fill />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
