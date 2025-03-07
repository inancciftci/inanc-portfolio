import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Inanc Ciftci",
};

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
