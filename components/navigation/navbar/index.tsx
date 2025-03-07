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
    <nav className="flex items-center bg-[rgba(0,0,0,0.5)] space-x-6 px-6 py-2 rounded-lg">
      {links.map((link) => (
        <TransitionLink
          customClass={`text-primary-100`}
          key={link.id}
          href={link.href}
        >
          {link.title}
        </TransitionLink>
      ))}
      <span className="text-2xl text-[rgb(74,85,101)]">|</span>
    </nav>
  );
};

export default Navbar;
