import ProjectCard from "@/components/projects/ProjectCard";
import { FolderClosedIcon } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    id: 10,
    title: "Save More - Personal Finance Tracker",
    description:
      "SaveMore is a personal finance tracker app built with Next.js, Supabase, Tailwind CSS, and ShadcnUI. It allows users to manage budgets, track income and expenses, and visualize their financial habits. With features like real-time data sync, secure authentication, and an intuitive dashboard, SaveMore helps users make informed financial decisions and stay on top of their goals.",
    techStack: [
      "devicon-nextjs-plain",
      "devicon-react-original",
      "devicon-typescript-plain",
      "devicon-tailwindcss-original",
    ],
    github: "https://github.com/inancciftci/savemore",
    demo: "https://savemore.vercel.app/",
    image: "/project-6.png",
    hasLink: true,
    link: "/project/save-more",
  },
  {
    id: 0,
    title: "Flow Blog",
    description:
      "Flow Blog is a dynamic, full-stack blogging platform built with Next.js, Supabase, Tailwind CSS and ShadcnUI. It features robust authentication, a rich text editor, dynamic content fetching, and seamless integration with Supabase's real-time database. Designed with a clean and modern UI, Flow Blog offers an intuitive experience for both content creators and readers.",
    techStack: [
      "devicon-nextjs-plain",
      "devicon-react-original",
      "devicon-typescript-plain",
      "devicon-tailwindcss-original",
      "devicon-supabase-plain",
    ],
    github: "https://github.com/inancciftci/flow-blog",
    link: "/project/flow-blog",
    demo: "https://flow-blog-weld.vercel.app/",
    image: "/project-1.png",
    hasLink: true,
  },
  {
    id: 4,
    title: "E-commerce Project",
    description:
      "A full-featured e-commerce website with product listings, dynamic filtering, and a responsive layout. Built using React, Redux, Axios, Vite and Tailwind CSS for a smooth shopping experience.",
    techStack: [
      "devicon-react-original",
      "devicon-tailwindcss-original",
      "devicon-redux-original",
      "devicon-axios-plain",
      "devicon-vitejs-plain",
    ],
    github: "https://github.com/inancciftci/eCommerceProject",
    demo: "https://e-commerce-project-8pjb.vercel.app/",
    image: "/ecommerce-project.png",
    link: "/project/e-commerce",
    hasLink: true,
  },
  {
    id: 1,
    title: "Portfolio Project",
    description:
      "A professional multilanguage portfolio website showcasing projects and skills, built with a focus on multilingual support. It features a responsive design, smooth navigation, and a clean user interface.",
    techStack: [
      "devicon-react-original",
      "devicon-tailwindcss-original",
      "devicon-redux-original",
    ],
    github: "https://github.com/inancciftci/FSWeb-Frontend-Challenge",
    demo: "https://fs-web-frontend-challenge-psi.vercel.app/",
    image: "/portfolio-project.png",
    link: "/project/flow-blog",
  },
  {
    id: 6,
    title: "Multistep Form",
    description:
      "A desktop only multistep form with a progress bar, built with Next.js, React Hook Form, Zod and Tailwind CSS. The form features dynamic validation and error handling.",
    techStack: ["devicon-nextjs-plain", "devicon-tailwindcss-original"],
    github: "https://github.com/inancciftci/multistep-form",
    demo: "https://multistep-form-dusky.vercel.app/",
    image: "/multistep-form.png",
    link: "/project/flow-blog",
  },
  {
    id: 5,
    title: "Pizza Store",
    description:
      "An interactive pizza store website allowing users to customize and order pizzas. Built with React and Next.js, featuring a dynamic user interface and responsive design.",
    techStack: ["devicon-react-original", "devicon-axios-plain"],
    github: "https://github.com/inancciftci/fsweb-s7-challenge-pizza",
    demo: "https://fsweb-s7-challenge-pizza-tan.vercel.app/",
    image: "/pizza-project.png",
    link: "/project/flow-blog",
  },
  {
    id: 2,
    title: "News Homepage",
    description:
      "A modern hero component for a news website with a responsive design and dynamic content layout. Built using HTML, CSS, and JavaScript, it offers a clean and engaging visual presentation.",
    techStack: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
    ],
    github: "https://github.com/inancciftci/News-homepage",
    demo: "https://news-homepage-css.vercel.app/",
    image: "/news-homepage.png",
    link: "/project/flow-blog",
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    description:
      "A fun and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. The project features dynamic gameplay, simple animations, and a responsive interface.",
    techStack: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
    ],
    github: "https://github.com/inancciftci/rock-paper-scissors",
    demo: "https://vercel.com/inancs-projects/rock-paper-scissors",
    image: "/rock-paper-scissors.png",
    link: "/project/flow-blog",
  },
];

const page = () => {
  return (
    <div className="pt-[6rem] pb-[6rem]">
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
        <div className="max-md:pt-[6rem] space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
