import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden max-w-[100vw]">
      <div className="container grid grid-cols-[60%_1fr] max-md:flex max-md:flex-col max-md:gap-10 items-center justify-center min-h-[100vh]">
        <div className="flex flex-col gap-4">
          <h1 className="z-[4] text-8xl font-bold">I&apos;m Inanc</h1>
          <div className="flex items-center gap-2">
            <p className="w-[5px] h-[5px] rounded-full bg-[#60d4a4] animate-[ping_1s_ease-in-out_infinite]"></p>
            Izmir, Turkiye
          </div>
          <div className="flex gap-2 items-center bg-gradient-to-r from-[#60d4a4]/30 to-black/10 rounded-r-3xl w-[60%] max-sm:w-[100%] p-4">
            <div className="text-[#4c9474] ml-1 text-2xl">|</div>
            <span className="font-bold">React/Next.js Developer</span>
          </div>
          <p className="text-md">
            I graduated with a law degree but found my passion in software
            development. I completed Workintech’s 6-month Full-Stack Program,
            gaining hands-on experience through 72 projects. I&apos;m excited to
            build a tech career and take on new challenges.
          </p>
        </div>
        <div className="bg-[#4c9474] shadow-[#60d4a4] shadow-2xl rotate-45 z-[2] text-5xl right-[3rem] top-[-24rem] absolute h-[1000px] p-8 rounded-b-full flex flex-col justify-end gap-10 max-md:hidden">
          <i className="devicon-html5-plain text-white"></i>
          <i className="devicon-css3-plain text-white"></i>
          <i className="devicon-nextjs-plain text-white"></i>
          <i className="devicon-react-original text-white"></i>
          <i className="devicon-java-plain text-white"></i>
          <i className="devicon-postgresql-plain text-white"></i>
          <i className="devicon-supabase-plain text-white"></i>
        </div>
        <div className="hidden max-md:flex items-center gap-8 w-[600px] bg-[#4c9474] shadow-[#60d4a4] rounded-l-full py-4 px-10 text-4xl absolute right-[-6rem] top-[10rem] max-sm:top-[50rem] max-sm:text-2xl max-sm:right-[-11rem]">
          <i className="devicon-nextjs-plain text-white"></i>
          <i className="devicon-html5-plain text-white"></i>
          <i className="devicon-java-plain text-white"></i>
          <i className="devicon-postgresql-plain text-white"></i>
          <i className="devicon-supabase-plain text-white"></i>
          <i className="devicon-css3-plain text-white"></i>
          <i className="devicon-react-original text-white"></i>
        </div>
      </div>
      <div className="max-md:hidden absolute z-[-2] w-[3px] bg-[#60d4a4] shadow-[#60d4a4] shadow-[0_5px_15px_5px] h-[80vh] rotate-[180deg] bottom-[100px] right-[81px]"></div>
      <div className="max-md:hidden absolute z-[1] w-[3px] bg-[#60d4a4] shadow-[#60d4a4] shadow-[0_5px_15px_5px] h-[80vh] rotate-[180deg] bottom-[114px] right-[68px]">
        <div className="w-[5px] h-[5px] fixed top-[-2px] left-[-1.1px] bg-[#60d4a4] rounded-full shadow-[#60d4a4] shadow-[0_5px_15px_5px]"></div>
      </div>
      <div className="max-md:hidden fixed bottom-0 right-0 w-[150px] h-[150px]">
        <Image
          className="absolute rotate-y-180"
          src={"/cat.png"}
          width={150}
          height={150}
          alt="cat laser eyes"
        />
      </div>
    </div>
  );
};

export default Hero;
