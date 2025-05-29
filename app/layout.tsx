import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

// const rethinkSans = Rethink_Sans({
//   variable: "--font-rethink-sans",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "300", "700", "600"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Inanc Ciftci",
    default: "Inanc Ciftci",
  },
  description:
    "A portfolio website for Inanc Ciftci, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className={`${outfit.className} font-outfit relative`}>
        <header className="container">
          <div className="flex flex-row-reverse items-center justify-between gap-4">
            <Image
              src={"/cv-img.png"}
              width={50}
              quality={100}
              height={50}
              alt="CV Photo"
              className="rounded-full"
            />
            <nav className="flex gap-2 items-center uppercase text-slate-400">
              <Link href={"/"}>Home</Link>
              <span>|</span>
              <Link href={"/#about"}>About</Link>
              <span>|</span>
              <Link href={"/#projects"}>Projects</Link>
              <span>|</span>
              <Link href={"/#certificates"}>Certificates</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
