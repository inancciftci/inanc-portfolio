import React from "react";
import AboutImage from "../about/AboutImage";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const techStack = [
  {
    id: 1,
    tech: "Next.js",
    icon: "devicon-nextjs-plain",
    content:
      "Next.js is a powerful React-based framework that provides server-side rendering and static site generation. It's my go-to choice for building fast and SEO-friendly web applications.",
  },
  {
    id: 2,
    tech: "React",
    icon: "devicon-react-original",
    content:
      "React is a JavaScript library for building user interfaces. It offers a component-based architecture that promotes reusability and helps create dynamic and responsive web applications.",
  },
  {
    id: 3,
    tech: "TypeScript",
    icon: "devicon-typescript-plain",
    content:
      "TypeScript is a strongly typed superset of JavaScript that enhances code quality and maintainability. It helps catch errors early through its static typing and offers robust development tools.",
  },
  {
    id: 4,
    tech: "Tailwind CSS",
    icon: "devicon-tailwindcss-original",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows rapid UI development through its predefined classes. It provides a highly customizable design system without writing custom CSS.",
  },
  {
    id: 7,
    tech: "NodeJS",
    icon: "devicon-nodejs-plain",
    content:
      "Node.js is a runtime environment that allows JavaScript to be run on the server side. It's lightweight, event-driven, and perfect for building scalable backend services and APIs.",
  },
  {
    id: 8,
    tech: "MongoDB",
    icon: "devicon-mongodb-plain",
    content:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's great for handling large volumes of unstructured data and enables fast, scalable development.",
  },
  {
    id: 9,
    tech: "Supabase",
    icon: "devicon-supabase-plain",
    content:
      "Supabase is an open-source alternative to Firebase that provides a real-time database, authentication, and storage. It integrates seamlessly with PostgreSQL, making it perfect for full-stack applications.",
  },
];

const AboutSection = () => {
  return (
    <div className="z-8 bg-black relative pb-20 pt-50">
      <div className="container mt-10">
        <div className="grid grid-cols-2 items-center">
          <AboutImage />
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Inanc Ciftci</h2>
            <div className="flex items-center gap-2 font-bold">
              <p className="w-[5px] h-[5px] rounded-full bg-[#60d4a4] animate-[ping_1s_ease-in-out_infinite]"></p>
              #OpenToWork
            </div>
            <p className="text-slate-400">
              I was born in 1997 in Konya, Turkiye. I graduated with a law
              degree but realized my true passion is software development. To
              build a strong foundation, I completed Workintech’s 6-month
              Full-Stack Development Program. This program included 960 hours of
              training and 72 hands-on projects, where I gained practical skills
              in both frontend and backend development.
            </p>
            <p className="text-slate-400">
              Now, I’m excited to pivot into a tech career, tackle new
              challenges, and keep growing as a developer. I’m ready to use my
              skills to contribute to meaningful projects and build a long-term
              career in software development.
            </p>
            <p className="text-slate-400">
              I live in Izmir, Turkiye, and I’m 27 years old. I love
              experimenting with new frameworks and consistently trying new
              things. Hopefully, my journey and knowledge can help you too!
            </p>
            <p>Here&apos;s my current tech stack.</p>
            <div className="flex gap-4 items-center">
              {techStack.map((t) => (
                <HoverCard key={t.id}>
                  <HoverCardTrigger asChild>
                    <i
                      className={`${t.icon} text-white text-4xl cursor-pointer`}
                    ></i>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="top"
                    className="w-80 text-white bg-gradient-to-tr from-[#4c9474]/90 to-black rounded-md p-4 mb-5 z-[1]"
                  >
                    <div className="flex justify-between space-x-4 relative">
                      <i className={`${t.icon} text-slate-200 text-lg`}></i>
                      <div className="space-y-2">
                        <h4 className="text-md font-semibold">{t.tech}</h4>
                        <p className="text-sm">{t.content}</p>
                      </div>
                      <div className="fixed h-[15px] w-[15px] rotate-[45deg] left-[50%] translate-x-[-50%] bottom-[12px] bg-white"></div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
