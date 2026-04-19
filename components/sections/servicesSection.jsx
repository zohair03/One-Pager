'use client';
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./servicesSection.module.css";

const services = [
  {
    id: "01",
    title: "Server Systems & Networking",
    description:
      "We are specialists in server deployment and high-quality networking components to keep your business connected.",
    image: "/images/rn-infotech-30.webp",
    btnText: "Server Systems & Networking",
    href: "/",
  },
  {
    id: "02",
    title: "Computer & Desktop Parts",
    description:
      "Authorized dealers for all desktop models and internal components. Whether it's a RAM upgrade or a custom build, we’ve got you covered.",
    image: "/images/rn-infotech-37.webp",
    btnText: "Computer & Desktop Parts",
    href: "/",
  },
  {
    id: "03",
    title: "Mobile Parts & Accessories",
    description:
      "A comprehensive range of genuine parts for all major mobile brands.",
    image: "/images/rn-infotech-57.webp",
    btnText: "Mobile Parts & Accessories",
    href: "/",
  },
];

const ServiceCard = ({ service, index, isVisible }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`transition-transform duration-400 hover:-translate-y-2 hover:shadow-xl group relative transition-all duration-700 ease-out transform max-[380px]:h-[350px] h-[420px] rounded-2xl overflow-hidden shadow-xl
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Background placeholder to prevent white flash */}
      <div className="absolute inset-0 bg-gray-800" />

      {/* Image with fade-in effect */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={index < 2}
          loading={index < 2 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+PC9zdmc+"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-6 flex flex-col gap-2">
        <h3 className="text-white text-left font-serif max-[380px]:text-lg text-2xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl max-[380px]:leading-10 leading-11 sm:leading-12 xl:leading-12 2xl:leading-13">
          {service.title}
        </h3>
        <p className="text-white/80 font-sans text-sm md:text-base leading-6 line-clamp-3">
          {service.description}
        </p>
        <Link href={service.href} className="pt-2">
          <button className="cursor-pointer font-serif font-extralight text-[12px] border border-white text-white rounded-full bg-transparent hover:bg-white/30 hover:backdrop-blur-lg px-8 transition-all ease-in-out duration-300 w-full md:w-fit min-h-[50px]">
            {service.btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-8 px-6 sm:px-8 lg:py-12 lg:px-16 2xl:px-35 min-h-[600px]">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-96 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[420px] bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="py-8 px-6 sm:px-8 lg:py-12 lg:px-16 2xl:px-35"
      style={{ boxShadow: "inset 0 50px 40px -10px #facdbe" }}
    >
      {/* Header with fade-in animation */}
      <div className={`flex flex-col items-center gap-4 mb-8 md:mb-10 transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="flex flex-col gap-2">
          <p className="label text-center font-semibold">What We Do</p>
          <h2 className="text-black text-h2 font-serif sm:text-3xl lg:text-4xl">
            Expert Solutions for Home & Enterprise
          </h2>
        </div>
        <p className="text-black/80 text-center font-sans text-lg lg:text-xl max-w-2xl">
          Reliable laptop & computer solutions — all under one roof.
        </p>
      </div>

      {/* Cards with staggered animation */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            isVisible={inView}
          />
        ))}
      </div>

      {/* Bottom button with fade-in */}
      <div className={`w-full flex justify-center mt-8 transition-all duration-700 ease-out delay-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <PrimaryBtn href="/" btnText="View All Services" />
      </div>
    </section>
  );
};

export default Services;