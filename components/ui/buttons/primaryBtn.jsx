import Link from "next/link";
import React from "react";

const primaryBtn = ({ btnText, onClick, href, custom, type, disabled }) => {
  // If type is "submit" or "button", render a button element
  if (type === "submit" || type === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${custom} cursor-pointer font-serif font-extralight text-[12px] bg-primary hover:bg-[#f7875b] disabled:bg-gray-400 disabled:cursor-not-allowed text-secondary rounded-full px-8 transition-all ease-in-out duration-300 min-w-[90%] md:min-w-[220px] min-h-[50px] flex items-center justify-center`}
      >
        {btnText}
      </button>
    );
  }

  // Otherwise render as Link
  return (
    <Link
      href={href || "/"}
      className={`${custom} cursor-pointer font-serif font-extralight text-[12px] bg-primary hover:bg-[#f7875b] text-secondary rounded-full px-8 transition-all ease-in-out duration-300 min-w-[90%] md:min-w-[220px] min-h-[50px] flex items-center justify-center`}
    >
      {btnText}
    </Link>
  );
};

export default primaryBtn;
