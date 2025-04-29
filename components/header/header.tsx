import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-2 items-center">
        <div className=" bg-green-900 rounded-full">
          <Image
            className="object-top"
            src={"/cv-png.png"}
            alt="cv photo"
            width={60}
            height={60}
          />
        </div>
        <h1>INANC CIFTCI</h1>
      </div>
    </div>
  );
};

export default Header;
