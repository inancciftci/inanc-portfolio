import { certificates } from "@/certificates";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Certificates = () => {
  return (
    <section id="certificates" className="container md:mt-15 max-sm:mt-45">
      <div className="flex flex-col gap-6 relative">
        <Image
          src={"/giphy.gif"}
          width={300}
          height={300}
          alt="Projects Gif"
          className="absolute md:right-0 md:-top-[33px] -z-1 rotate-0 md:scale-90 max-sm:-top-50 max-sm:scale-75 max-sm:rotate-35 max-sm:-right-10"
        />
        <h3 className="text-3xl  font-bold relative">
          Certificates
          <div className="w-[140px] h-[5px] absolute -bottom-1 left-16 rounded-lg bg-primary"></div>
        </h3>
        <p className="text-muted-foreground font-thin max-w-[450px]">
          Here are some of the certifications I&apos;ve earned to strengthen my
          skills in development, communication, and professional growth. Each
          one reflects my commitment to learning and staying sharp in both
          technical and soft skills.
        </p>

        <div className="bg-slate-200 rounded-lg px-4 py-4">
          <Table>
            <TableHeader>
              <TableRow className="uppercase">
                <TableHead>Title</TableHead>
                <TableHead className="text-left">From</TableHead>
                <TableHead className="text-left">Certificate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map((c) => (
                <TableRow key={c.title}>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase font-bold">{c.title}</span>
                      <span className="text-sm max-w-[120px]">
                        {c.description.slice(0, 55) + "..."}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-left italic">
                    {c.company}
                  </TableCell>
                  <TableCell className="text-left">
                    <Link
                      target="_blank"
                      className="relative group"
                      href={c.link || "#"}
                    >
                      <Image
                        className="self-end"
                        src={c.img}
                        quality={100}
                        width={70}
                        height={50}
                        alt={c.title}
                      />
                      <div className="w-[70px] -z-1 opacity-0 group-hover:z-2 group-hover:opacity-100 duration-300 ease-in-out h-full bg-black/40 text-white absolute top-0 flex items-center justify-center">
                        <ExternalLink size={15} />
                      </div>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
