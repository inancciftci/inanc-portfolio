import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-bl from-[#60d4a4] to-black p-4 rounded-lg">
        Flow Blog / <span className="text-[#60d4a4]">Full-Stack Blog App</span>
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className=" h-[300px] rounded-lg overflow-hidden relative">
          <Image
            src={"/project-1.png"}
            fill
            alt="Flow Blog Post"
            className="object-cover object-top"
          />
        </div>
        <div className=" h-[300px] rounded-lg overflow-hidden relative">
          <Image
            src={"/flow-blog-2.png"}
            fill
            alt="Flow Blog Post"
            className="object-cover object-top"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#60d4a4]">Summary</h2>
      <p className="text-slate-300">
        Flow Blog is a dynamic, full-stack blogging platform built with Next.js,
        Supabase, Tailwind CSS, and ShadcnUI. This case study highlights the
        challenges faced during development, the solutions implemented, the
        outcomes achieved.
      </p>
      <h2 className="text-3xl font-bold text-[#60d4a4]">
        The Mission/Challenge
      </h2>
      <p className="text-slate-300">
        The mission of the Flow Blog project was to create a modern blogging
        platform with robust authentication, rich text editing, and seamless
        data integration. The main challenge was implementing real-time updates
        and ensuring a smooth user experience, and the objective was to deliver
        an intuitive platform for both content creators and readers.
      </p>
      <h2 className="text-3xl font-bold text-[#60d4a4]">The Process</h2>
      <span className="text-md">
        The development of Flow Blog involved several key steps to ensure its
        success:
      </span>
      <ul className="list-disc list-inside text-slate-300">
        <li>Planning and Design: Wireframing and UI/UX design</li>
        <li>Development: Frontend and backend implementation</li>
        <li>Testing: User acceptance testing and bug fixing</li>
        <li>Deployment: Hosting on Vercel and Supabase</li>
        <li>
          Front-End: Chose Next.js for its server-side rendering and dynamic
          routing.
        </li>
        <li>
          Back-End: Selected Supabase for its real-time database and
          authentication features.
        </li>
        <li>
          Styling: Used Tailwind CSS and ShadcnUI for a clean and responsive
          design.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#60d4a4]">
        Key Development Aspects:
      </h2>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Real-Time Database Integration:
        </span>
        Implemented Supabase for real-time data fetching, enhancing user
        engagement.
      </p>
      <div className="h-[290px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/realtime.gif"}
          fill
          alt="Realtime gif"
          className="object-cover object-top"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Rich Text Editor:
        </span>
        Integrated a versatile editor allowing content creators to write and
        style posts efficiently.
      </p>
      <div className="h-[220px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/text-editor.gif"}
          fill
          alt="Text-editor gif"
          className="object-cover object-left"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Authentication System:
        </span>
        Utilized Supabase&apos;s authentication for secure login and user
        management.
      </p>
      <div className="h-[180px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/authentication.gif"}
          fill
          alt="Text-editor gif"
          className="object-cover object-center"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Responsive Design:
        </span>
        Applied Tailwind CSS and ShadcnUI to create a consistent look and feel
        across devices.
      </p>
      <div className="h-[430px] w-[400px] max-sm:w-[100%] relative rounded-lg overflow-hidden">
        <Image
          src={"/responsive.gif"}
          fill
          alt="Text-editor gif"
          className="object-cover object-top"
        />
      </div>
      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Performance Optimization:
        </span>
        Leveraged Next.js features like dynamic imports and image optimization.
      </p>
    </div>
  );
};

export default page;
