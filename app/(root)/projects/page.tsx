import ProjectCard from "@/components/projects/ProjectCard";
import { FolderClosedIcon } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <div className="pt-[6rem]">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <div className="border-[1px] p-2 rounded-full overflow-hidden">
            <FolderClosedIcon className="w-[30px] h-[30px]" />
          </div>
          <h1 className="text-5xl font-bold text-slate-300">
            My <span className="text-[#60d4a4]">Projects</span>
          </h1>
          <div className="flex mt-[-0.5rem] rounded-md overflow-hidden">
            <div className="w-[70px] bg-[#60d4a4] h-[5px]"></div>
            <div className="w-[180px] bg-white h-[5px]"></div>
          </div>
        </div>
        <div className="max-md:pt-[6rem]">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default page;
