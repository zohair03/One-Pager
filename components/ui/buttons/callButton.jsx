"use client";
import { useState } from "react";
import Image from "next/image";

const PHONE_NUMBER = "+91 9535216410";

// Theme colors — change here to retheme
const theme = {
  bg:          "bg-orange-600 liquid-glass-strong-light",
  bgHover:     "hover:bg-orange-400",
  bgDisabled:  "disabled:bg-gray-400",
  text:        "text-[#1a0a04]",
  textHover:   "hover:text-[#1a0a04]",
};

const sharedClasses = `
  cursor-pointer font-serif font-extralight text-[12px]
  rounded-full px-8 transition-all ease-in-out duration-300
  min-w-[90%] md:min-w-[220px] min-h-[50px]
  flex items-center justify-center
  relative overflow-hidden
  btn-primary btn-press liquid-glass-btn
`;

const CallButton = ({btnText, custom, disabled}) => {
  const [showNumber, setShowNumber] = useState(false);

  const colorClasses = `
    ${theme.bg} ${theme.bgHover} ${theme.text} ${theme.textHover}
    ${disabled ? theme.bgDisabled : ""}
  `;

  const handleClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <>
      {/* Desktop - toggle number on click */}
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${sharedClasses} ${colorClasses} w-[240px] px-8 transition-all ease-in-out duration-300 min-w-[220px] min-h-[50px] hidden sm:flex items-center justify-center gap-2 ${custom ? custom : ""}`}
      >
        <Image
          src="/icons/call.svg"
          alt="Call icon"
          width={20}
          height={20}
        />
        <div className="shimmer" />
        {showNumber ? PHONE_NUMBER : btnText}
      </button>

      {/* Mobile - direct phone call */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
        className={`${sharedClasses} ${colorClasses} w-[214px] px-8 transition-all ease-in-out duration-300 min-w-[90%]  min-h-[50px] sm:hidden flex items-center justify-center gap-2`}
        style={custom} 
      >
        <Image
          src="/icons/call.svg"
          alt="Call icon"
          width={20}
          height={20}
        />
        <div className="shimmer" />
        {btnText}
      </a>
    </>
  );
};

export default CallButton;
