import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsSeperator from "./ProjectsSeperator";

const projects = [
  {
    id: 10,
    title: "Save More",
    subhead: "Personal Finance Tracker",
    slogan: "Track Smart. Spend Wise. Save More.",
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
    subhead: "Fullstack Blog Platform with CMS",

    slogan: "Your Words. Real-Time. No Limits.",
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
    title: "Bandage",
    subhead: "E-Commerce Platform",

    slogan: "Smart Filters. Smooth Experience. Better Shopping.",
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
];

const ProjectSection = () => {
  return (
    <div className="bg-black min-h-[500px] relative z-8">
      <ProjectsSeperator />
      <div className="container mt-10">
        <div className="flex flex-col gap-30">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
