"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  customClass?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

const TransitionLink = ({
  children,
  href,
  customClass,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const main = document.querySelector("main");
    main?.classList.add(`page-transition`);

    await sleep(500);

    router.push(href);

    await sleep(500);

    main?.classList.remove(`page-transition`);
  };
  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={`${customClass} ${
        isActive &&
        " text-white px-4 outline-[#3b82f6] outline-2 rounded-[30px]"
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
