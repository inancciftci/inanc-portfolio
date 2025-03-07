import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center bg-gradient-to-bl from-[#60d4a4] to-black p-4 rounded-lg">
        Bandage /{" "}
        <span className="text-[#60d4a4]">Full-Stack E-commerce Platform</span>
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className=" h-[300px] rounded-lg overflow-hidden relative">
          <Image
            src={"/e-commerce-1.png"}
            fill
            alt="Flow Blog Post"
            className="object-cover object-top"
          />
        </div>
        <div className=" h-[300px] rounded-lg overflow-hidden relative">
          <Image
            src={"/e-commerce-2.png"}
            fill
            alt="Flow Blog Post"
            className="object-cover object-top"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#60d4a4]">Summary</h2>
      <p className="text-slate-300">
        The E-commerce Project is a full-featured online store built with
        Next.js, React, Tailwind CSS, and TypeScript. This case study covers the
        challenges faced during development, the solutions implemented, the
        outcomes achieved.
      </p>
      <h2 className="text-3xl font-bold text-[#60d4a4]">
        The Mission/Challenge
      </h2>
      <p className="text-slate-300">
        The mission of the E-commerce Project was to create a responsive,
        dynamic e-commerce website with product listings, filtering, and a
        smooth checkout process. The main challenge was ensuring scalability and
        delivering a seamless user experience, and the objective was to build a
        robust platform that supports easy product management and customer
        interactions.
      </p>
      <h2 className="text-3xl font-bold text-[#60d4a4]">The Process</h2>
      <span className="text-md">
        development of the E-commerce Project involved several key steps to
        ensure its success:
      </span>
      <ul className="list-disc list-inside text-slate-300">
        <li>Planning and Design: Wireframing and UI/UX design</li>
        <li>Development: Frontend and backend implementation</li>
        <li>Testing: User acceptance testing and bug fixing</li>
        <li>Deployment: Hosting on Vercel</li>
        <li>
          Front-End: Chose React to build a dynamic and interactive user
          interface.
        </li>
        <li>
          Styling: Used Tailwind CSS for a clean and responsive design.
          Components were styled by me to learn through building it.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#60d4a4]">
        Key Development Aspects:
      </h2>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Product Management System:
        </span>
        Built a dynamic product catalog with sorting and filtering features.
      </p>
      <div className="h-[150px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/filtering.gif"}
          fill
          alt="Filtering gif"
          className="object-cover object-top"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          User Authentication:
        </span>
        Implemented secure login and account management with React Hook Form and
        Zod.
      </p>
      <div className="h-[220px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/auth-commerce.gif"}
          fill
          alt="Auth gif"
          className="object-cover object-left"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Cart Management:
        </span>
        Developed a robust cart system that supports adding, removing, and
        updating products efficiently.
      </p>
      <div className="h-[230px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/cart.gif"}
          fill
          alt="Cart gif"
          className="object-cover object-top"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Checkout Process:
        </span>
        Designed a streamlined checkout flow to enhance the shopping experience.
      </p>
      <div className="h-[330px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/checkout.gif"}
          fill
          alt="Checkout gif"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default page;
