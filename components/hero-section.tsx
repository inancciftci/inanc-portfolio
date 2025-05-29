import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, MailIcon } from "lucide-react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export default function HeroSection() {
  return (
    <>
      <div className="overflow [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-[960px] px-6 md:pb-20 max-sm:pt-10 md:pt-10">
            <Image
              src={"/blob-2.png"}
              alt="Blob"
              width={450}
              height={450}
              className="absolute md:right-0 md:top-50 max-sm:-bottom-22 max-sm:left-1/2 max-sm:-translate-x-1/2 -z-1"
            />
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:text-center">
              <div className="w-[210px] h-[210px] relative">
                <Image src={"/cv-img-2.png"} alt="CV Photo" fill />
              </div>

              <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center">
                <div className="group relative w-[240px] flex items-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                  <span
                    className={cn(
                      "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  ^.^
                  <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                  <AnimatedGradientText className="text-sm font-medium">
                    Frontend/Web Developer
                  </AnimatedGradientText>
                </div>
                <h1 className="text-5xl font-bold">Hi, I&apos;m Inanc 👋</h1>
                <p className="text-sm text-muted-foreground max-w-[500px]">
                  After 1.5 years of self-taught coding and completing
                  Workintech’s 6-month Full-Stack course—where I built 72
                  projects from scratch—I now create polished, user-focused
                  applications and welcome every new tech challenge.
                </p>
                <div className="flex items-center gap-4 max-sm:mt-10">
                  <Link
                    target="_blank"
                    className="p-2 bg-slate-200 rounded-full hover:bg-primary hover:text-white duration-300 ease-in-out"
                    href={"https://github.com/inancciftci"}
                  >
                    <Github size={16} />
                  </Link>
                  <Link
                    target="_blank"
                    className="p-2 bg-slate-200 rounded-full hover:bg-primary hover:text-white duration-300 ease-in-out"
                    href={"https://www.linkedin.com/in/inancciftci/"}
                  >
                    <Linkedin size={16} />
                  </Link>
                  <Link
                    className="p-2 bg-slate-200 rounded-full hover:bg-primary hover:text-white duration-300 ease-in-out"
                    href={"mailto:ciftcinanc@gmail.com"}
                  >
                    <MailIcon size={16} />
                  </Link>
                </div>

                <Link className="w-[150px]" href="/cv.pdf" target="_blank">
                  <InteractiveHoverButton className="cursor-pointer w-[140px] max-sm:mb-10">
                    Resume
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
