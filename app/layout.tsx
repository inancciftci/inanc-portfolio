import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import AnimatedScrollbar from "@/components/ui/animatedscrollbar";
import Navbar from "@/components/navigation/navbar";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Inanc Ciftci",
    default: "Welcome to my portfolio",
  },
  description: "A portfolio resume for inanc ciftci.",
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
      <body className={`${rethinkSans.className} relative antialiased`}>
        <AnimatedScrollbar />
        <div className="z-[-2] fixed bg-gradient-to-bl from-[#4c9474]/30  to-black/50 h-screen w-full mix-blend-lighten "></div>
        <div className="fixed z-[10] top-[1rem] left-[50%] translate-x-[-50%]">
          <Navbar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
