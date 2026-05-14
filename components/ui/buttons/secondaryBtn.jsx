import Link from "next/link";
import React from "react";

// Theme colors — change here to retheme
const theme = {
  text:      "text-[#e08c70]",
  textHover: "hover:text-[#e0b5a0]",
};

const sharedClasses = `
  cursor-pointer font-serif font-extralight text-[12px]
  rounded-full px-8 transition-all ease-in-out duration-300
  min-w-[90%] md:min-w-[220px] min-h-[50px]
  flex items-center justify-center
  relative overflow-hidden
  btn-border-glow btn-press
`;

const SecondaryBtn = ({ btnText, href, custom }) => {
  return (
    <Link
      href={href ? href : "/contact"}
      className={`${sharedClasses} ${theme.text} ${theme.textHover} ${custom}`}
    >
      <div className="shimmer" />
      <span className="relative z-10">{btnText}</span>
    </Link>
  );
};

export default SecondaryBtn;