"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Earth, Github } from "lucide-react";

interface ProjectProps {
  id: number;
  title: string;
  slogan: string;
  description: string;
  subhead: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
  link: string;
  hasLink?: boolean;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="grid max-md:grid-cols-1 grid-cols-[60%_1fr] items-center gap-10 relative">
      {/* Left Side */}
      <div className="min-h-[500px] flex flex-col gap-10 items-center bg-gradient-to-br from-green-600/30 via-green-900/100 to-white backdrop-blur-2xl w-full rounded-xl relative z-10 pb-8">
        <h3 className="pacifico-font mt-10 text-center w-full text-2xl z-20">
          {project.slogan}
        </h3>

        {/* Project Image */}
        <div className="relative z-30">
          <div className="bg-blue-300 w-[313px] h-[206px] rounded-[3px] absolute top-[10px] z-1 left-[59px] overflow-hidden">
            <Image
              src={project.image}
              className="object-cover object-top"
              alt={project.title}
              fill
            />
          </div>
          <div className="absolute right-0 top-15 z-10">
            <Image
              src={"/_iphone.png"}
              height={500}
              width={150}
              alt="iPhone mockup"
            />
          </div>
          <div className="absolute w-[144px] h-[255px] top-15 right-1">
            <Image
              src={"/save-mobile-2.png"}
              fill
              className="object-cover object-bottom rounded-3xl absolute top-8 right-0 z-5 bottom-[-50px]"
              alt="mobile mockup"
            />
          </div>

          <div className="h-[260px] w-[430px] relative">
            <Image src={"/mockup.png"} alt={project.title} fill />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-10">
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-2">
          <h3 className="uppercase text-5xl font-bold">{project.title}</h3>
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-300 uppercase">
              {project.subhead}
            </p>
            <span>|</span>
            <div className="flex items-center gap-2">
              <Link
                className="bg-green-600 p-1 rounded-full"
                href={project.github}
                target="_blank"
              >
                <Github className="font-bold text-lg" size={15} />
              </Link>
              <Link
                className="bg-green-600 p-1 rounded-full"
                href={project.demo}
                target="_blank"
              >
                <Earth className="font-bold text-lg" size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-slate-200">Tools: </span>
          {project.techStack.map((tech, i) => (
            <i key={i} className={`${tech} text-white text-xl`}></i>
          ))}
        </div>

        {/* Call to Action */}
        <Link
          href={project.link}
          className="hover:shadow-white text-center hover:text-white hover:font-bold hover:bg-green-600 transition-all duration-600 bg-white w-[200px] shadow-[5px_5px_0px_0px] shadow-green-600 text-black uppercase cursor-pointer py-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
