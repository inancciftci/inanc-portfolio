import ContactForm from "@/components/contact/contactForm";
import { MailIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6rem]">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col items-center gap-4">
          <div className="border-[1px] p-2 rounded-full overflow-hidden">
            <MailIcon className="w-[30px] h-[30px]" />
          </div>
          <h1 className="text-5xl font-bold text-slate-300">
            Contact <span className="text-[#60d4a4]">Me</span>
          </h1>
          <div className="flex mt-[-0.5rem] rounded-md overflow-hidden">
            <div className="w-[175px] bg-[#60d4a4] h-[5px]"></div>
            <div className="w-[65px] bg-white h-[5px]"></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
