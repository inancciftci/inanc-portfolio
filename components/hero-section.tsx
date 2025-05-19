import React from "react";
import { IconCloud } from "./magicui/icon-cloud";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-10 items-center justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl font-bold">Hi, I&apos;m Inanc 👋</h3>
          <div className="flex gap-2 items-center">
            <Image
              src={"/cv-img.png"}
              width={90}
              quality={100}
              height={90}
              alt="CV Photo"
            />
            <p>
              With a law degree in one pocket and 1.5 years of self-taught
              coding in the other, I leveled up in Workintech’s 6-month
              Full-Stack course—delivering 72 projects from scratch. Now I
              engineer polished, user-centric experiences and embrace every tech
              twist and turn.
            </p>
          </div>
          <Link href={"#projects"}>
            <InteractiveHoverButton className="max-w-[250px] text-center">
              Projects
            </InteractiveHoverButton>
          </Link>
        </div>
        <IconCloud images={icons} />
      </div>
    </div>
  );
};

export default HeroSection;
