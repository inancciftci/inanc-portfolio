"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const ProjectsSeperator = () => {
  const arrProjects = Array(25).fill("Projects •");
  return (
    <div className="bg-black h-[100px] w-full relative z-8">
      <div className="bg-green-900 h-[60px] w-[140%] absolute flex items-center justify-center">
        <Marquee pauseOnHover direction="right">
          {arrProjects.map((text, i) => (
            <h3
              key={i}
              className="uppercase text-white mr-[0.2rem] font-bold text-xxl"
            >
              {text}
            </h3>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProjectsSeperator;
