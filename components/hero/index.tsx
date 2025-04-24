"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import CloudSeparator from "./CloudSeparator";
import { Copy } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState<boolean>(false);
  const textControls = useAnimation();
  const { scrollY } = useScroll();
  const moonRotation = useTransform(scrollY, [0, 500], [0, 270]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX / window.innerWidth - 0.5;
      const moveY = clientY / window.innerHeight - 0.5;

      setMousePosition({
        x: moveX * 15,
        y: moveY * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    textControls.start({
      x: mousePosition.x,
      y: mousePosition.y,
      transition: { type: "spring", stiffness: 75, damping: 30, mass: 0.5 },
    });
  }, [mousePosition, textControls]);

  const copyClipboard = () => {
    navigator.clipboard.writeText("ciftcinanc@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center relative">
      <div className="flex flex-col gap-10 container items-center fixed z-[3] top-[50%] translate-y-[-50%]">
        <h1 className="text-5xl font-bold relative">
          Hi! I&apos;m Inanc. A Web Developer.
          <span className="absolute top-[-1rem] font-thin left-0 text-sm">
            <span className="flex gap-2 items-center text-slate-300">
              <span className="animate-pulse w-[7px] h-[7px] rounded-full bg-green-400"></span>
              Izmir, Turkiye
            </span>
          </span>
          <span className="absolute bottom-[-1rem] font-thin left-37 text-sm text-slate-300">
            <span
              className="flex gap-2 items-center cursor-pointer"
              onClick={copyClipboard}
            >
              <Copy className="text-white" size={15} />
              <span id="myEmail">
                {copied ? "Copied!" : "ciftcinanc@gmail.com"}
              </span>
            </span>
          </span>
        </h1>
        {/* <div className="flex flex-col justify-center gap-4 items-center text-sm">
           <button className="bg-[#3B82F6]/50 px-6 py-2 cursor-pointer rounded-lg font-[400] uppercase flex items-center gap-2 outline-4 outline-[#3B82F6]">
            <MoveRight size={15} /> View Projects
          </button>
        </div> */}
        <motion.div animate={textControls}>
          <h3 className="text-lg mt-10 font-[300] text-white w-[800px] text-center">
            I craft fast, responsive, and visually striking web apps using{" "}
            <span className="font-bold text-green-400">React</span>,
            <span className="font-bold text-green-400">Next.js</span>,{" "}
            <span className="font-bold text-green-400">Tailwind CSS</span> — and
            bring them to life with{" "}
            <motion.span
              animate={{
                y: [0, -4, 0], // bounce up and back
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="inline-block font-bold text-green-400"
            >
              Framer Motion.
            </motion.span>{" "}
            I handle the backend too, using{" "}
            <span className="font-bold text-green-400">Node.js</span>,{" "}
            <span className="font-bold text-green-400">MongoDB</span>, and
            services like{" "}
            <span className="font-bold text-green-400">Supabase</span> to
            deliver full-stack magic.
          </h3>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-0 w-[1200px] h-[130px] overflow-hidden z-[4]">
        <motion.img
          style={{ rotate: moonRotation }}
          src={"/moon.png"}
          alt="moon background"
          className="object-cover object-bottom rotate-180"
        />
      </motion.div>
      <motion.div
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.3,
        }}
        animate={{
          translateY: [0, -950],
          translateX: [0, 30, -20, 40, -7],
          rotate: [0, 45, 90, 135, 180],
        }}
        className="absolute bottom-0 left-[55%]"
      >
        <i className="devicon-nextjs-plain text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.6,
        }}
        animate={{
          translateY: [0, -920],
          translateX: [10, -30, 20, -25, 5],
          rotate: [0, 60, 120, 180, 240],
        }}
        className="absolute bottom-0 left-[40%]"
      >
        <i className="devicon-react-plain text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.4,
        }}
        animate={{
          translateY: [0, -960],
          translateX: [-10, 25, -15, 30, 0],
          rotate: [0, 30, 120, 210, 300],
        }}
        className="absolute bottom-0 left-[45%]"
      >
        <i className="devicon-tailwindcss-original text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 13,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.1,
        }}
        animate={{
          translateY: [0, -940],
          translateX: [5, -20, 35, -15, 10],
          rotate: [0, 90, 180, 270, 360],
        }}
        className="absolute bottom-0 left-[50%]"
      >
        <i className="devicon-typescript-original text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.5,
        }}
        animate={{
          translateY: [0, -930],
          translateX: [-10, 10, -25, 15, 5],
          rotate: [0, 30, 60, 90, 120],
        }}
        className="absolute bottom-0 left-[35%]"
      >
        <i className="devicon-nodejs-plain-wordmark text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.2,
        }}
        animate={{
          translateY: [0, -960],
          translateX: [20, -20, 25, -10, 5],
          rotate: [0, 60, 180, 300, 360],
        }}
        className="absolute bottom-0 left-[38%]"
      >
        <i className="devicon-mongodb-plain text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 11.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.7,
        }}
        animate={{
          translateY: [0, -910],
          translateX: [-15, 20, -10, 5, 10],
          rotate: [0, 45, 135, 225, 315],
        }}
        className="absolute bottom-0 left-[42%]"
      >
        <i className="devicon-supabase-plain text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 10.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.8,
        }}
        animate={{
          translateY: [0, -970],
          translateX: [15, -5, 25, -20, 10],
          rotate: [0, 70, 140, 210, 280],
        }}
        className="absolute bottom-0 left-[48%]"
      >
        <i className="devicon-framermotion-original text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 9.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.25,
        }}
        animate={{
          translateY: [0, -955],
          translateX: [0, 20, -30, 15, -5],
          rotate: [0, 45, 90, 180, 360],
        }}
        className="absolute bottom-0 left-[52%]"
      >
        <i className="devicon-firebase-plain text-5xl opacity-[0.5]"></i>
      </motion.div>

      <motion.div
        transition={{
          duration: 9.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 1.25,
        }}
        animate={{
          translateY: [0, -955],
          translateX: [0, 20, -30, 15, -5],
          rotate: [0, 45, 90, 180, 360],
        }}
        className="absolute bottom-0 left-[52%]"
      >
        <i className="devicon-javascript-plain text-5xl opacity-[0.5]"></i>
      </motion.div>

      <div className="absolute overflow-hidden w-full bottom-0 left-0 min-h-[300px] max-h-[300px] ">
        <div className="absolute bottom-[-1110px] left-[50%] translate-x-[-50%] w-[1200px] rounded-full aspect-square moon-shadow"></div>
      </div>
      <CloudSeparator />
    </div>
  );
};

export default Hero;
