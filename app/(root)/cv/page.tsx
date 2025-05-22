import React from "react";
import "./cv.css";
import Image from "next/image";

const index = () => {
  return (
    <div className="resume">
      <div className="columns">
        <aside className="sidebar">
          <div className="header flex flex-col items-center">
            <Image width={450} height={450} src="/cv-photo.jpg" alt="Photo" />
            <h1>INANC CIFTCI</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span>Web Developer</span>
            </div>
          </div>
          <section>
            <h2>Details</h2>
            <p>Izmir, Konak</p>
            <p>ciftcinanc@gmail.com</p>
            <p>+90 554 588 9784</p>
          </section>
          <section>
            <h2>Links</h2>
            <ul>
              <li className="links">
                <i
                  className="fa-solid fa-link"
                  style={{ marginRight: "5px" }}
                ></i>
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://inanc-portfolio.vercel.app/"
                >
                  Portfolio
                </a>
              </li>
              <li className="links">
                <i
                  className="fa-solid fa-link"
                  style={{ marginRight: "5px" }}
                ></i>
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.linkedin.com/in/inancciftci/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="links">
                <i
                  className="fa-solid fa-link"
                  style={{ marginRight: "5px" }}
                ></i>
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://github.com/inancciftci"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Education</h2>
            <ul style={{ fontSize: "12px", paddingLeft: 0, listStyle: "none" }}>
              <li style={{ marginTop: "10px" }}>
                <strong>Bootcamp</strong> — Workintech Full-Stack Web
                Development
                <br />
                <em>October 2023 — May 2024</em>
              </li>
              <li>
                <strong>Bachelor&apos;s Degree - Law</strong> — Selcuk
                University
                <br />
                <em>September 2015 — July 2020</em>
              </li>
            </ul>
          </section>
          <section>
            <h2>Languages</h2>
            <ul>
              <li>English - Fluent</li>
              <li>Turkish - Native</li>
            </ul>
          </section>
        </aside>
        <main className="main">
          <header>
            <h2 className="font-bold">Profile Summary</h2>
            <p id="changable">
              I graduated from law school but discovered my true passion lies in
              software development. After teaching myself JavaScript, HTML, and
              CSS for 1.5 years, I completed Workintech’s 6-month, 960-hour
              Full-Stack Development Program. Through 72 hands-on projects, I
              gained practical skills in both front-end and back-end
              development. Now, based in Izmir, I’m ready to fully pursue my
              software career, tackle new challenges, and contribute to
              meaningful projects.
            </p>
          </header>

          <section id="changable" style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "18px",
                marginBottom: "12px",
                fontWeight: "bold",
                color: "#2c3e50",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Skills
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                React.js • Next.js (SSR & routing)
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                TypeScript • JavaScript (ES6+)
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                HTML5 • CSS3 • Tailwind CSS
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                Redux • Context API • Zustand
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                RESTful APIs • Supabase • Firebase • PostgreSQL
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                Framer Motion • GSAP (animations)
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                Performance Optimization (Lighthouse, Web Vitals)
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                Accessibility & SEO Best Practices
              </li>
              <li style={{ fontSize: "14px", marginBottom: "8px" }}>
                Jest • React Testing Library • Cypress
              </li>
              <li style={{ fontSize: "14px" }}>
                Agile/Scrum & Collaborative Design
              </li>
            </ul>
          </section>

          <section className="section">
            <h3 className="font-bold">Projects</h3>
            <div className="timeline">
              <div className="item">
                <h4 className="font-bold" style={{ fontSize: "14px" }}>
                  SaveMore — Personal Finance App
                </h4>
                <div
                  style={{ marginTop: "5px" }}
                  className="period project-links"
                >
                  <a
                    href="https://savemore.vercel.app/"
                    style={{
                      textDecoration: "underline",
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </a>
                  |
                  <a
                    href="https://github.com/inancciftci/savemore"
                    style={{
                      textDecoration: "underline",
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    GitHub
                  </a>
                </div>
                <p style={{ fontSize: "14px" }}>
                  SaveMore is a comprehensive personal finance app built with
                  Next.js, Supabase, and Tailwind CSS. It offers an intuitive
                  dashboard that allows users to track expenses, manage budgets,
                  set savings goals, and monitor recurring bills.
                </p>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    <strong>Frontend:</strong> Next.js App Router, Shadcn UI,
                    Chart.js, Tailwind CSS.
                  </li>
                  <li>
                    <strong>Backend:</strong> Supabase PostgreSQL database &amp;
                    authentication, Next.js Server Actions.
                  </li>
                  <li>
                    <strong>Key Features:</strong> Budget tracking, savings
                    modules, transaction filtering, recurring bills, dark/light
                    mode.
                  </li>
                </ul>
              </div>
              <div className="item">
                <h4 className="font-bold" style={{ fontSize: "14px" }}>
                  FlowBlog — Modern Blog App
                </h4>
                <div
                  style={{ marginTop: "5px" }}
                  className="period project-links"
                >
                  <a
                    href="https://flow-blog-weld.vercel.app/"
                    style={{
                      textDecoration: "underline",
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </a>
                  |
                  <a
                    href="https://github.com/inancciftci/flow-blog"
                    style={{
                      textDecoration: "underline",
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    GitHub
                  </a>
                </div>
                <p style={{ fontSize: "14px" }}>
                  FlowBlog is a dynamic full-stack blogging platform built with
                  Next.js, Supabase, Tailwind CSS, and ShadcnUI. It offers
                  real-time updates, a rich text editor, and secure user
                  authentication.
                </p>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    <strong>Frontend:</strong> Next.js SSR, Tailwind CSS.
                  </li>
                  <li>
                    <strong>Backend:</strong> Supabase real-time database &amp;
                    authentication.
                  </li>
                  <li>
                    <strong>Key Features:</strong> Real-time integration, rich
                    text editor, responsive design, performance optimization.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="section">
            <h3 className="font-bold">Work Experience</h3>
            <div className="timeline">
              <div className="item">
                <h4>Legal Intern — Izmir Bar Association</h4>
                <div className="period">October 2021 — October 2022</div>
                <p style={{ fontSize: "14px" }}>
                  During my internship at Izmir Bar Association, I gained
                  experience in various legal processes. I assisted with
                  research, case preparation, and client meetings, which
                  improved my analytical skills.
                </p>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    Conducted legal research and prepared cases for ongoing
                    litigation.
                  </li>
                  <li>
                    Drafted legal documents and correspondence under senior
                    attorneys’ supervision.
                  </li>
                  <li>
                    Participated in client meetings, enhancing communication and
                    advisory skills.
                  </li>
                  <li>Contributed to the development of case strategies.</li>
                </ul>
              </div>
              <div className="item">
                <h4>Co-Founder — SetuBeauty</h4>
                <div className="period">January 2020 — January 2022</div>
                <p style={{ fontSize: "14px" }}>
                  As a Co-Founder of SetuBeauty, I established and managed an
                  e-commerce brand in the beauty industry, combining product
                  sourcing, digital marketing, and web development to create a
                  user-friendly shopping experience.
                </p>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    Managed end-to-end development of the e-commerce platform.
                  </li>
                  <li>
                    Increased brand visibility and sales through digital
                    marketing campaigns.
                  </li>
                  <li>
                    Optimized order management processes to ensure customer
                    satisfaction.
                  </li>
                  <li>
                    Strengthened supplier relationships to improve product
                    variety and pricing.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default index;
