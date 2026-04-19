"use client";
import { useState } from "react";
import Image from "next/image";

const PHONE_NUMBER = "+91 9535216410";

const CallButton = ({btnText, custom}) => {
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <>
      {/* Desktop - toggle number on click */}
      <button
        onClick={handleClick}
        className={`${custom ? custom : ""} w-[240px] cursor-pointer font-serif  font-extralight text-[12px] bg-primary hover:bg-[#f7875b] text-secondary rounded-full px-8 transition-all ease-in-out duration-300 min-w-[220px] min-h-[50px] hidden sm:flex items-center justify-center gap-2`}
      >
        <Image
          src="/icons/call.svg"
          alt="Call icon"
          width={20}
          height={20}
        />
        {showNumber ? PHONE_NUMBER : btnText}
      </button>

      {/* Mobile - direct phone call */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
        className={`${custom} w-[214px] font-serif  font-extralight text-[12px] bg-primary hover:bg-[#f7875b] text-secondary rounded-full px-8 transition-all ease-in-out duration-300 min-w-[90%]  min-h-[50px] sm:hidden flex items-center justify-center gap-2`}
      >
        <Image
          src="/icons/call.svg"
          alt="Call icon"
          width={20}
          height={20}
        />
        {btnText}
      </a>
    </>
  );
};

export default CallButton;
