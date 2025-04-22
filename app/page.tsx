import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Inanc Ciftci",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full h-[1000px] bg-black z-[8] relative">x</div>
    </div>
  );
}
