"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="container z-8 relative bg-black py-24">
      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12">
        <motion.div
          className="flex w-full justify-center items-center"
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-[300px] relative rounded-full overflow-hidden aspect-square outline outline-4 outline-blue-700">
            <Image
              fill
              alt="cv-photo"
              className="object-cover object-top"
              src={"/cv-png.png"}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-white">About Me</h1>
          <p className="text-sm text-slate-300">
            Hi, I&apos;m İnanç — a former law student who found his true passion
            in building for the web. After completing a full-time full-stack
            development program and co-founding an e-commerce brand, I realized
            how much I enjoy turning ideas into functional, user-friendly
            websites. These days, I focus on creating clean, responsive, and
            accessible interfaces using Next.js, React, TypeScript, and Tailwind
            CSS.
          </p>
          <p className="text-sm text-slate-300">
            I love learning new tools, experimenting with UI animations, and
            finding better ways to solve problems with code. Whether I&apos;m
            building a personal project or contributing to a team, I care deeply
            about writing maintainable code and creating experiences that feel
            smooth and intuitive.
          </p>
          <p className="text-sm text-slate-300">
            I&apos;m currently looking for opportunities to grow as a developer
            and be part of a team where I can contribute, learn, and build
            meaningful products. Thanks for stopping by — feel free to reach
            out, I&apos;d love to connect.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
