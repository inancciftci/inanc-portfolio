import { LinkIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const project = {
  id: 1,
  title: "Flow Blog",
  description:
    "Flow Blog is a dynamic, full-stack blogging platform built with Next.js, Supabase, Tailwind CSS and ShadcnUI. It features robust authentication, a rich text editor, dynamic content fetching, and seamless integration with Supabase's real-time database. Designed with a clean and modern UI, Flow Blog offers an intuitive experience for both content creators and readers.",
  techStack: [
    "devicon-nextjs-plain",
    "devicon-react-original",
    "devicon-typescript-plain",
    "devicon-tailwindcss-original",
  ],
  github: "https://github.com",
  demo: "https://demo.com",
  image: "https://via.placeholder.com/150",
};

const ProjectCard = () => {
  return (
    <div className="max-md:relative grid grid-cols-[1fr_auto] max-md:grid-cols-1 items-center gap-15 p-6 rounded-md shadow-[#60d4a4] shadow-[0_5px_15px_5px] relative">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-md text-slate-400">{project.description}</p>
        <div className="flex items-center gap-4">
          <span>Tools: </span>
          {project.techStack.map((tech, i) => (
            <i key={i} className={`${tech} text-white text-xl`}></i>
          ))}
        </div>
        <div className="flex max-sm:flex-col-reverse max-sm:items-start max-sm:gap-4 justify-between items-center">
          <Link
            className="py-3 px-6 bg-gradient-to-br from-[#60d4a4]/70 via-[#4c9474]/50 to-slate-600 rounded-lg flex items-center gap-4"
            href={"/"}
          >
            <MoveRightIcon className="w-[15px]" />
            View Project
          </Link>
          <Link
            className="flex items-center gap-1 text-slate-400 text-sm underline underline-offset-1"
            href={"/"}
          >
            <LinkIcon className=" w-[15px] h-[15px] " /> Open Live Site
          </Link>
        </div>
      </div>
      <div className="relative max-md:absolute max-sm:right-[-1rem] max-sm:top-[-6rem] max-md:right-[1.5rem] max-md:top-[-9rem]">
        <div className="bg-blue-300 w-[260px] h-[173px] max-sm:w-[130px] max-sm:h-[87px] rounded-[3px] absolute top-[9px] left-[50px] max-sm:top-[4px] max-sm:left-[25px] z-[1] overflow-hidden">
          <Image
            src={"/project-1.png"}
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
