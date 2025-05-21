"use client";
import React, { useContext } from "react";
import { IconCloud } from "./magicui/icon-cloud";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";
import { LanguageContext } from "@/app/context/LangContext";
import { content } from "@/lib/content";
import { DockDemo } from "./ui/dock";

const iconSlugs = [
  "typescript",
  "javascript",
  "html5",
  "css3",
  "react",
  "nextdotjs",
  "supabase",
  "firebase",
  "github",
  "visualstudiocode",
  "figma",
  "wordpress",
  "vercel",
  "postgresql",
  "mongodb",
  "nodedotjs",
];

const icons = iconSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

const HeroSection = () => {
  const { lang } = useContext(LanguageContext);
  const localized = content[lang];
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-10 items-center justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl font-bold">{localized.hi}</h3>
          <div className="flex gap-2 items-center">
            <Image
              src={"/cv-img.png"}
              width={90}
              quality={100}
              height={90}
              alt="CV Photo"
            />
            <p>{localized.short}</p>
          </div>
          <Link href={"#projects"}>
            <InteractiveHoverButton className="max-w-[250px] text-center">
              {localized.button}
            </InteractiveHoverButton>
          </Link>
          <DockDemo />
        </div>
        <IconCloud images={icons} />
      </div>
    </div>
  );
};

export default HeroSection;
