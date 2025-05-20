import type { Metadata } from "next";
import { Outfit, Pacifico } from "next/font/google";
import "./globals.css";
import AnimatedScrollbar from "@/components/ui/animatedscrollbar";
// import Navbar from "@/components/navigation/navbar";
import SmoothScroller from "@/components/ui/smoothscroller";
import { LanguageProvider } from "./context/LangContext";
// import Header from "@/components/header/header";

// const rethinkSans = Rethink_Sans({
//   variable: "--font-rethink-sans",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "300", "700", "600"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["cyrillic"],
  weight: ["400"],
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
      <SmoothScroller>
        <body
          className={`${outfit.className} ${pacifico.variable} relative antialiased`}
        >
          <LanguageProvider>
            <AnimatedScrollbar />
            {/* <div className="fixed z-[1000] container top-[1rem] left-[50%] translate-x-[-50%]">
            <Header />
          </div> */}
            <main>{children}</main>
          </LanguageProvider>
        </body>
      </SmoothScroller>
    </html>
  );
}
