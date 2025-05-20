"use client";
import { LanguageContext } from "@/app/context/LangContext";
import { content } from "@/lib/content";
import React, { useContext } from "react";

const AboutSection = () => {
  const { lang } = useContext(LanguageContext);
  const localized = content[lang];
  return (
    <div className="flex flex-col gap-4 container">
      <h3 className="text-3xl font-bold relative">
        {localized.about_heading}
        <span className="h-[6px] w-[130px] bg-primary rounded-lg absolute -bottom-1 left-10"></span>
      </h3>
      <p className="leading-relaxed">{localized.about_desc}</p>
    </div>
  );
};

export default AboutSection;
