import Link from "next/link";
import React from "react";

const techStack = [
  { id: "Css", icon: "devicon-css3-plain" },
  { id: "Html", icon: "devicon-html5-plain" },
  { id: "Javascript", icon: "devicon-javascript-plain" },
  { id: "Typescript", icon: "devicon-typescript-plain" },
  { id: "React", icon: "devicon-react-original" },
  { id: "Nextjs", icon: "devicon-nextjs-plain" },
  { id: "Tailwindcss", icon: "devicon-tailwindcss-plain" },
  { id: "Supabase", icon: "devicon-supabase-plain" },
  { id: "Firebase", icon: "devicon-firebase-plain" },
  { id: "Postgresql", icon: "devicon-postgresql-plain" },
  { id: "Git", icon: "devicon-git-plain" },
  { id: "Github", icon: "devicon-github-original" },
  { id: "Vscode", icon: "devicon-vscode-plain" },
  { id: "Figma", icon: "devicon-figma-plain" },
];

const TechStack = () => {
  return (
    <section id="about" className="container">
      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-bold relative">
          About me
          <div className="w-[90px] h-[5px] absolute -bottom-1 left-16 rounded-lg bg-primary"></div>
        </h3>
        <p className="text-muted-foreground font-thin">
          Hi, I’m Inanc Ciftci, a web developer based in Izmir, Turkey. After
          discovering my passion for coding, I took on 1.5 years of self-study
          and then completed Workintech’s 6-month Full-Stack Web Development
          bootcamp, where I delivered 72 hands-on projects from scratch.
        </p>
        <div className="flex flex-wrap gap-3 items-center justify-center bg-slate-200 shadow-primary rounded-sm shadow-[4px_4px_0_0] p-4 ">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm"
            >
              <i className={`devicon ${tech.icon} colored`}></i>
              <span className="text-sm font-medium max-sm:hidden">
                {tech.id}
              </span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground font-thin">
          When I’m not coding, I enjoy exploring new frameworks, tinkering with
          AI-powered tools, and traveling whenever I get the chance. I
          specialize in building polished, user-focused applications with
          React.js and Next.js, using TypeScript, Tailwind CSS, Supabase,
          Firebase, and PostgreSQL. I’ve created SaveMore, a personal finance
          tracker with budget-management modules and real-time dashboards, and
          FlowBlog, a dynamic blogging platform featuring live updates and
          rich-text editing. I’m always optimizing for performance,
          accessibility, and SEO—and I’m ready to bring that expertise to your
          next project. Feel free to reach out at{" "}
          <Link
            className="text-primary font-bold"
            href="maito:ciftcinanc@gmail.com"
          >
            ciftcinanc@gmail.com
          </Link>{" "}
          or connect on LinkedIn.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
