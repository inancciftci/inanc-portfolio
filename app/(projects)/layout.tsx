import TransitionLink from "@/components/transitionLink";
import { ArrowRight } from "lucide-react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[6rem] pb-[2rem]">
      <div className="container">
        {children}
        <div className="flex items-end justify-end mt-4">
          <TransitionLink
            href="/projects"
            customClass="text-xl font-bold flex items-center gap-2 p-4 bg-gradient-to-br from-[#60d4a4]/70 via-[#4c9474]/50 to-slate-600 rounded-lg"
          >
            <ArrowRight className="size-5" /> Go back to projects...
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
