import React from "react";
import Image from "next/image";
import ContactForm from "../ui/contactForm";
import CallButton from "../ui/buttons/callButton";

const contactInfo = [
  {
    icon: "/icons/call.svg",
    alt: "call icon",
    text: "+91 9535216410",
    link: "tel:+91 9535216410",
    border: true,
  },
  {
    icon: "/icons/mail.svg",
    alt: "email icon",
    text: "ramesh.kumar@rninfotech.co.in",
    link: "mailto:ramesh.kumar@rninfotech.co.in",
    border: true,
  },
  {
    icon: "/icons/location.svg",
    alt: "location icon",
    text: "23/2, Jaraganahalli Grama Main road, GKM College Road, Jaraganahalli, Bengaluru, Karnataka, 560078",
    link: "",
    border: true,
  },
];

const FooterForm = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 bg-gray-50 py-8 px-5 md:py-12 md:px-8 lg:py-12 lg:px-16 2xl:px-35 2xl:py-15">
      {/* Left - Contact Info */}
      <div className="flex flex-col gap-5 items-start w-full lg:w-1/2 rounded-2xl shadow-md p-6 md:p-10 bg-white border border-color">
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl md:text-2xl 2xl:text-3xl text-color-h3">
            Contact Our Experts
          </h3>
          <p className="w-full md:w-[80%] font-sans text-base md:text-[18px] font-medium text-black/70">
            Whether you have questions about our services, need assistance with
          </p>
        </div>

        <div className="w-full">
          {/* Contact info rows */}
          {contactInfo.map((item) => (
            <div
              key={item.alt}
              className="flex gap-4 md:gap-5 border-b border-[#bbbbbb] w-full py-4 md:py-6 items-center"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={24}
                height={24}
                className="icon-primary md:w-[27px] md:h-[27px] flex-shrink-0"
              />
              <a
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-gray-700 text-base font-sans md:text-lg font-medium"
              >
                {item.text}
              </a>
            </div>
          ))}

          {/* Hours */}
          <div className="flex gap-4 md:gap-5 w-full py-4 md:py-6">
            <Image
              src="/icons/clock.svg"
              alt="time icon"
              width={24}
              height={24}
              className="icon-primary md:w-[27px] md:h-[27px] flex-shrink-0 self-start mt-1"
            />
            <div className="text-gray-700 flex flex-col gap-1">
              <div className="flex gap-4">
                <p className="text-base font-sans md:text-lg font-medium w-20 md:w-27">
                  Mon-Sat
                </p>
                <p className="text-base font-sans md:text-lg">
                  11:00 AM - 09:00 PM
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-base font-sans md:text-lg font-medium w-20 md:w-27">
                  Sun
                </p>
                <p className="text-base font-sans md:text-lg">
                  Only Appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center w-full my-2 md:my-0">
          <CallButton btnText="Call Now" />
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="flex flex-col gap-5 items-start w-full lg:w-1/2 rounded-2xl shadow-md p-6 md:p-8 bg-white border border-color">
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl md:text-2xl 2xl:text-3xl text-color-h3">
            Send Us A Message
          </h3>
          <p className="w-full md:w-[80%] font-sans text-base md:text-[18px] font-medium text-black/70">
            Have a question or need assistance? Fill out the form below and our
          </p>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
