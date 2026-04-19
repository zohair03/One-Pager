import React from "react";
import Image from "next/image";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-[#f6f8fd] bg-[url('/images/why-bg.webp')] bg-cover shadow-[inset_0_20px_60px_-10px_#00000026] px-8 py-14 lg:py-18 lg:px-16 2xl:px-50">
        <div className="h-full">
          <div className="flex gap-8 md:gap-10 flex-col items-center justify-center">
            {/* Header */}
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="label font-semibold">Why Us</p>
              <h2 className="max-[380px]:text-2xl text-h2 md:text-3xl lg:text-4xl  font-serif sm:text-3xl text-center max-[380px]:leading-12 leading-13 sm:leading-11 lg:leading-16">
                Why Tech Professionals Choose RN Infotech
              </h2>
            </div>

            {/* Cards */}
            <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
              {/* Card */}
              <div className="shadow-lg shadow-gray-300 transition-transform duration-600 hover:-translate-y-2 w-full xl:w-1/3 p-4 pb-6 bg-white rounded-2xl flex items-start gap-4 border border-gray-300">
                <div className="bg-primary rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/workspace_premiu.svg"
                    alt="Laptop Repair Icon"
                    width={30}
                    height={30}
                    className="icon-color md:w-[40px] md:h-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <p className="max-[380px]:text-sm text-bodytext text-base w-95/100 md:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
                    Diverse Inventory: From the smallest mobile chip to massive server racks, we house everything under one roof.
                  </p>
                  <Link
                    href="/"
                    className="flex justify-center items-center text-primary font-bold font-sans text-base md:text-base"
                  >
                    About Us
                    <Image
                      src="/icons/right-icon.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="icon-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="shadow-lg shadow-gray-300 transition-transform duration-600 hover:-translate-y-2 w-full xl:w-1/3 p-4 pb-6 bg-white rounded-2xl flex items-start gap-4 border border-gray-300">
                <div className="bg-primary rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/shield_with_heart.svg"
                    alt="Laptop Repair Icon"
                    width={30}
                    height={30}
                    className="icon-color md:w-[40px] md:h-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <p className="max-[380px]:text-sm text-bodytext text-base w-95/100 md:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
                    Quality Assured: We only deal in genuine parts and components from trusted global brands.
                  </p>
                  <Link
                    href="/"
                    className="flex justify-center items-center text-primary font-bold font-sans text-base md:text-base"
                  >
                    Testimonials
                    <Image
                      src="/icons/right-icon.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="icon-primary"
                    />
                  </Link>
                </div>
              </div>
              <div className="shadow-lg shadow-gray-300 transition-transform duration-600 hover:-translate-y-2 w-full xl:w-1/3 p-4 pb-6 bg-white rounded-2xl flex items-start gap-4 border border-gray-300">
                <div className="bg-primary rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/sentiment_very_satisfied.svg"
                    alt="Laptop Repair Icon"
                    width={30}
                    height={30}
                    className="icon-color md:w-[40px] md:h-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <p className="max-[380px]:text-sm text-bodytext text-base w-95/100 md:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
                    Outstanding Support: Our background in retail services ensures you get help when you need it most.
                  </p>
                  <Link
                    href="/"
                    className="flex justify-center items-center text-primary font-bold font-sans text-base md:text-base"
                  >
                    Contact Now
                    <Image
                      src="/icons/right-icon.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="icon-primary"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="flex flex-col justify-center items-center mt-2 lg:mt-4 w-full md:w-fit">
              <PrimaryBtn custom={"w-[80%]"} href="/" btnText="Schedule a Repair" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
