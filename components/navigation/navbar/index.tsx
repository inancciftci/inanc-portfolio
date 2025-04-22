import TransitionLink from "@/components/transitionLink";
import React from "react";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Projects", href: "/projects" },
  { id: 4, title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center bg-slate-500/50 gap-4 px-3 py-2 text-sm rounded-[30px]">
      {links.map((link) => (
        <TransitionLink
          customClass={`text-primary-100`}
          key={link.id}
          href={link.href}
        >
          {link.title}
        </TransitionLink>
      ))}
    </nav>
  );
};

export default Navbar;
