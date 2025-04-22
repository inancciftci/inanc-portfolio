"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CloudSeparator = () => {
  return (
    <div className="w-full z-10 absolute bottom-2 left-[50%] translate-x-[-50%] container">
      <motion.div
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        animate={{
          translateX: [0, 10, 0, -10, 0],
          translateY: [0, 5, 0, -5, 0],
        }}
        className="absolute bottom-[-8rem] left-[50%] translate-x-[-50%]"
      >
        <Image src={"/cloud-3.png"} height={10} width={700} alt="cloud" />
      </motion.div>
      <motion.div
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        animate={{
          translateX: [0, 10, 0, -10, 0],
          translateY: [0, 5, 0, -5, 0],
        }}
        className="absolute bottom-[-10rem] left-0"
      >
        <Image src={"/cloud-3.png"} height={10} width={700} alt="cloud" />
      </motion.div>

      <motion.div
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        animate={{
          translateX: [0, 10, 0, -10, 0],
          translateY: [0, 5, 0, -5, 0],
        }}
        className="absolute bottom-[-10rem] right-0"
      >
        <Image src={"/cloud-3.png"} height={10} width={700} alt="cloud" />
      </motion.div>
    </div>
  );
};

export default CloudSeparator;
