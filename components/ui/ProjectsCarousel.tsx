"use client";

import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Card from "./project-card";
const projects = [
  {
    id: 1,
    poster: "/posters/know-your-coin.png",
    video: "/videos/know-your-coin.mov",
    title: "Know Your Coin",
    subhead: "In Depth On-Chain Analysis",
    currentlyBuilding: true,
    description:
      "Know Your Coin is a blockchain analytics dashboard focused on the Solana ecosystem, built with Next.js, Tailwind CSS, ShadcnUI, and TanStack Query. It empowers users to explore token-level data by pasting a contract address, offering rich insights like top holder analysis, live price history, and daily trading volume. With real-time data from Helius and DefiLlama APIs, advanced caching, and custom visualizations, Know Your Coin delivers a smooth and insightful experience for traders, researchers, and enthusiasts alike.",

    tools: [
      "Next.js",
      "Shadcn/UI",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "Solana RPC",
      "Tanstack Query",
      "API Routes",
    ],
  },
  {
    id: 10,
    poster: "/posters/know-your-coin.png",
    video: "/videos/what-the-cook.mp4",
    title: "What The Cook!",
    subhead: "AI Recipe Generator",
    onlyLink: "https://what-to-cook-alpha.vercel.app/",
    description:
      "Know Your Coin is a blockchain analytics dashboard focused on the Solana ecosystem, built with Next.js, Tailwind CSS, ShadcnUI, and TanStack Query. It empowers users to explore token-level data by pasting a contract address, offering rich insights like top holder analysis, live price history, and daily trading volume. With real-time data from Helius and DefiLlama APIs, advanced caching, and custom visualizations, Know Your Coin delivers a smooth and insightful experience for traders, researchers, and enthusiasts alike.",

    tools: [
      "Next.js",
      "Shadcn/UI",
      "Tailwind CSS",
      "OpenAI API",
      "Unsplash API",
      "TypeScript",
      "Supabase",
      "Vercel AI SDK",
      "Tanstack Query",
      "API Routes",
      "Next.js SSR",
    ],
  },
  {
    id: 2,
    poster: "/posters/save-more.png",
    video: "/videos/save-more.mp4",
    title: "Save More",
    subhead: "Personal Finance Tracker",
    links: [
      "https://savemore.vercel.app/",
      "https://github.com/inancciftci/savemore",
    ],
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "TypeScript",
      "Supabase",
      "API Routes",
      "Next.js SSR",
    ],
    description:
      "SaveMore is a personal finance tracker app built with Next.js, Supabase, Tailwind CSS, and ShadcnUI. It allows users to manage budgets, track income and expenses, and visualize their financial habits. With features like real-time data sync, secure authentication, and an intuitive dashboard, SaveMore helps users make informed financial decisions and stay on top of their goals.",
  },
  {
    id: 3,
    poster: "/posters/flow-blog.png",
    video: "/videos/flow-blog.mp4",
    title: "Flow Blog",
    subhead: "Modern Blog Application",
    links: [
      "https://flow-blog-weld.vercel.app/",
      "https://github.com/inancciftci/flow-blog",
    ],
    tools: [
      "Next.js",
      "Tailwind CSS",
      "React Context",
      "TypeScript",
      "Supabase",
      "API Routes",
      "Next.js SSR",
      "NextAuth",
    ],
    description:
      "Flow Blog is a dynamic, full-stack blogging platform built with Next.js, Supabase, Tailwind CSS and ShadcnUI. It features robust authentication, a rich text editor, dynamic content fetching, and seamless integration with Supabase's real-time database. Designed with a clean and modern UI, Flow Blog offers an intuitive experience for both content creators and readers.",
  },
  {
    id: 4,
    poster: "/posters/bandage.png",
    video: "/videos/bandage.mp4",
    title: "Bandage",
    subhead: "E-Commerce Application",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Redux",
      "Axios",
      "Java",
      "Spring Boot",
    ],
    links: [
      "https://e-commerce-project-8pjb.vercel.app/",
      "https://github.com/inancciftci/eCommerceProject",
    ],
    description:
      "A full-featured e-commerce website with product listings, dynamic filtering, and a responsive layout. Built using React, Redux, Axios, Vite and Tailwind CSS for a smooth shopping experience.",
  },
];

export function Projects() {
  const cards = projects.map((project, index) => (
    <Card key={index} project={project} />
  ));

  return (
    <div className="-mt-15 relative">
      <Carousel items={cards} />
    </div>
  );
}
