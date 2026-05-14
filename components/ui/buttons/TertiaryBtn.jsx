import React from "react";
import Link from "next/link";

const TertiaryBtn = ({ href, btnText, custom }) => {
  return (
    <Link
      href={href ? href : "/"}
      className={`${custom} border border-white text-white bg-transparent hover:bg-white/30 hover:backdrop-blur-lg cursor-pointer font-serif font-extralight text-[12px] rounded-full px-8 transition-all ease-in-out duration-300 min-w-[90%] md:min-w-[220px] min-h-[50px] flex items-center justify-center relative overflow-hidden btn-primary btn-press`}
    >
      {btnText}
    </Link>
  );
};

export default TertiaryBtn;