import React from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import SecondaryBtn from "../ui/buttons/secondaryBtn";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[91vh] max-[380px]:px-4 p-8 py-12 bg-[url('/images/rn-infotech-hero-bg.webp')] bg-cover bg-center">
        <div className="flex flex-col h-full justify-center">
          <div className="h-[91vh] absolute inset-0 bg-black/70" /> {/* ← overlay */}
          <div className="h-full relative z-10 flex flex-col items-center justify-center gap-4 md:gap-6">
            
            {/* Heading */}
            <h1 className="flex justify-center items-center font-serif text-color-herotext max-[380px]:text-xl text-[25px] pt-25 sm:text-5xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl text-center sm:w-4/5 max-[380px]:leading-10 leading-12 md:leading-16 lg:leading-18 xl:leading-18 2xl:leading-28">
              Your Trusted Partner for Next-Gen Tech & Networking
            </h1>

            {/* Subtext */}
            <p className="max-[450px]:mt-[-5px] mt-[-20px] mb-[15px] font-sans max-[380px]:w-full w-[90%] max-[380px]:text-sm text-lg 2xl:text-2xl leading-6 max-[380px]:leading-5 md:leading-7 2xl:leading-8 sm:w-4/5 md:w-3/5 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-white">
              From high-performance laptops and mobile parts to enterprise-grade server systems, RN Infotech delivers quality hardware and networking components right to your doorstep
            </p>

            {/* Buttons */}
            <div className="w-[90%] md:w-fit flex flex-col sm:flex-row gap-5 md:gap-5">
              <PrimaryBtn href="/" btnText="View Services"/>
              <SecondaryBtn href="/" custom="border border-light-blue" btnText="Shop Now"/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;