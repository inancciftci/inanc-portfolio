"use client";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import { projects } from "@/lib/project";
import { Github, Globe, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useRef } from "react";

const texts = [
  "Still building",
  "Ran out of ideas",
  "Stuck",
  "Nvm",
  "Will be good",
  "Brb",
  "Nvm...",
];

const ProjectPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { slug } = useParams<{ slug: string }>();
  const project = projects.filter((pr) => pr.slug === slug)[0];
  console.log(videoRef.current);
  console.log(project);
  return (
    <section className="flex flex-col gap-6 ">
      <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-10 bg-slate-100 container rounded-lg relative">
        <video
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => videoRef.current?.pause()}
          className="rounded-xl max-md:self-center w-full"
          muted
          loop
          playsInline
          preload="auto"
          ref={videoRef}
        >
          <source src={project.video} type="video/mp4" />
        </video>

        <div className="flex flex-col gap-4">
          <p className="font-thin text-sm">Hover on card to play the video.</p>
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <p className="font-thin uppercase text-sm">{project.subhead}</p>
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
          <p className="font-thin text-sm">{project.en}</p>

          <div className="flex gap-6 items-center">
            {project.tools.map((tool, index) => (
              <i key={index} className={tool + " text-2xl"} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative">
        <Image
          src={"/binary.gif"}
          width={500}
          height={300}
          alt="binary gif"
          className="absolute top-0 -z-1"
        />
        <Image
          src={"/cat.gif"}
          width={300}
          height={300}
          alt="cat gif"
          className="mt-5"
        />
        <MorphingText texts={texts} />
      </div>
    </section>
  );
};

export default ProjectPage;
