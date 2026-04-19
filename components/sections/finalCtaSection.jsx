import React from "react";
import SecondaryBtn from "../ui/buttons/secondaryBtn";
import CallButton from "../ui/buttons/callButton";

const FinalCta = ({
  label = "Get In Touch",
  title = "Ready to Upgrade Your Tech Stack?",
  subtitle = "Join thousands of satisfied customers and businesses who trust RN Infotech for their hardware needs.",
  cta1 = "Call Us Now",
  href1,
  cta2 = "Get a Quote Today",
  href2 = "/",
  image = "bg-[url('/images/rn-infotech-final-bg.webp')]",
  height = "min-sm:h-[70vh]",
  headingFontSize,
}) => {
  return (
    <>
      <section className={`${image} flex flex-col items-center justify-center relative min-h-[65vh] ${height} md:h-[60vh] lg:min-h-[40vh] xl:min-h-[70vh] bg-cover bg-center max-[380px]:py-15 p-8 py-12 lg:py-12 lg:px-16`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6 md:gap-7 z-10 px-4 sm:px-8">
          <div className="flex flex-col lg:gap-4 text-center items-center">
            <p className="label font-semibold text-white text-sm md:text-base mb-1 xl:mb-[-10px] 2xl:mb-[10px]">
              {label}
            </p>
            <h2 className={`text-white max-[380px]:text-xl text-h2 md:text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl  font-serif sm:text-3xl text-center max-[380px]:leading-10 leading-14 lg:leading-22 xl:leading-16 2xl:leading-22 ${headingFontSize}`}>
              {title}
            </h2>
            <p className="mt-2 xl:mt-2 text-center font-sans font-semibold max-[380px]:text-sm text-base md:text-lg lg:text-2xl xl:text-xl 2xl:text-2xl max-[380px]:w-full w-[90%] md:w-auto xl:w-[80%] text-white/80 ">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            <CallButton btnText={cta1} />
            <SecondaryBtn
              custom={"border border-light-blue"}
              href={href2}
              btnText={cta2}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCta;
