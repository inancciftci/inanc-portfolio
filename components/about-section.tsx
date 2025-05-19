import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 container">
      <h3 className="text-3xl font-bold relative">
        About Me
        <span className="h-[6px] w-[130px] bg-primary rounded-lg absolute -bottom-1 left-10"></span>
      </h3>
      <p className="leading-relaxed">
        I was born in 1997 in Konya, Turkey, and after earning my law degree I
        soon realized my true passion lay in writing code. I spent 18 months
        teaching myself JavaScript, HTML, and CSS before enrolling in
        Workintech’s 6-month, 960-hour Full-Stack Development Program. There I
        delivered 72 hands-on projects—building everything from dynamic React
        front-ends to Java back-ends—and honed my skills in Next.js, Supabase,
        REST APIs, and responsive design. Now, at 28 and living in İzmir, I’m
        eager to channel that foundation into a thriving tech career, tackle
        challenging problems, and keep pushing my boundaries as a developer. I
        love exploring new frameworks and patterns, and I’m excited to
        contribute meaningful code to ambitious projects.
      </p>
    </div>
  );
};

export default AboutSection;
