"use client";
import React, { useContext } from "react";
import { Projects } from "./ui/ProjectsCarousel";
import { LanguageContext } from "@/app/context/LangContext";
import { content } from "@/lib/content";

const ProjectsSection = () => {
  const { lang } = useContext(LanguageContext);
  const localized = content[lang];
  return (
    <div id="#projects" className="flex flex-col gap-4 mt-12">
      <h3 className="text-3xl font-bold container relative mb-2">
        {localized.button}
        <span className="text-sm absolute -bottom-1 text-zinc-600 font-[300]">
          {localized.hover}
        </span>
        <span className="h-[6px] w-[110px] bg-primary rounded-lg absolute bottom-3.5 left-25"></span>
      </h3>
      <Projects />
    </div>
  );
};

export default ProjectsSection;
