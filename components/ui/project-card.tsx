"use client";
import React, { useContext, useRef } from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import { LanguageContext } from "@/app/context/LangContext";

interface ProjectI {
  id: number;
  poster: string;
  video: string;
  title: string;
  subhead: string;
  en: string;
  tr: string;
  tools?: string[];
  currentlyBuilding?: boolean;
  links?: string[];
  onlyLink?: string;
}

const Card = ({ project }: { project: ProjectI }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useContext(LanguageContext);

  return (
    <div
      onMouseEnter={() => {
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        videoRef.current?.pause();
      }}
      className="custom-cursor rounded-lg overflow-hidden w-[350px] bg-white shadow-lg flex flex-col gap-4"
    >
      <video
        ref={videoRef}
        className="w-full h-[280px] object-cover border-b-1 border-zinc-200"
        width="420"
        height="340"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={project.video} type="video/mp4" />
      </video>
      <div className="px-4 pb-4 min-h-[300px] flex flex-col gap-6">
        <div className="flex flex-col gap-1 relative">
          {project.currentlyBuilding && (
            <AnimatedShinyText className="absolute top-[3px] -right-4 rounded-lg inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="text-sm flex items-center gap-2">
                <div className="w-1 h-1 bg-amber-600 animate-ping rounded-full"></div>
                Currently Building
              </span>
            </AnimatedShinyText>
          )}

          {project.onlyLink && (
            <AnimatedShinyText className="absolute top-[3px] -right-4 rounded-lg inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <div className="flex flex-col gap-2 items-end">
                <span className="text-sm flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-600 animate-ping rounded-full"></div>
                  Currently Building
                </span>
                <Link
                  className="text-primary font-bold flex items-center gap-2 text-sm underline"
                  href={project.onlyLink}
                  target="_blank"
                >
                  <Link2 size={15} />
                  Demo
                </Link>
              </div>
            </AnimatedShinyText>
          )}

          {project.links && (
            <div className="absolute top-[-1px] -right-3 rounded-lg inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <Link
                className="flex bg-primary text-white px-2 py-1 rounded-lg gap-1 items-center text-sm mr-2"
                href={project.links[0]}
              >
                <Link2 size={13} /> <span>Live</span>
              </Link>
              <Link
                className="flex bg-primary text-white px-2 py-1 rounded-lg gap-1 items-center text-sm"
                href={project.links[1]}
              >
                <Github size={13} /> <span>Github</span>
              </Link>
            </div>
          )}

          <h3 className="text-2xl font-bold">{project.title}</h3>
          <h4 className="text-sm uppercase font-[300] text-zinc-500">
            {project.subhead}
          </h4>
        </div>
        <p className="text-zinc-600 text-sm">{project[lang]}</p>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {project.tools?.map((tool, index) => (
          <span
            key={index}
            className="bg-primary px-2 py-1 rounded-lg text-white text-[12px]"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
