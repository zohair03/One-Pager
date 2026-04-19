import Link from "next/link";
import Image from "next/image";
import CallButton from "../ui/buttons/callButton";

const quickLinks1 = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/" },
  { title: "FAQs", href: "/" },
];

const quickLinks2 = [
  { title: "Contact Us", href: "/" },
  { title: "Services", href: "/" },
  { title: "Gallery", href: "/" },
];

const servicesLinks1 = [
  { title: "Laptop Repair", href: "/" },
  { title: "Second Hand Laptops", href: "/" },
  { title: "Ram & Storage Upgrade", href: "/" },
];

const servicesLinks2 = [];

const   FooterLinks = () => {
  return (
    <footer className="bg-gradient-to-t from-[#290e04]  to-[#2e221e] text-white font-sans">
      {/* Main Footer */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        {/* Col 1 - Logo + CTA + Social */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="logo-glow text-5xl lg:text-3xl xl:text-5xl text-red-500"
            >
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={250}
                height={250}
                className=""
              />
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="https://x.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors flex flex-col items-center justify-center"
            >
              <Image
                src="/icons/Twitter.svg"
                alt="twitter"
                width={70}
                height={70}
                style={{ width: "auto", height: "auto" }}
                className="icon-color"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/Facebook.svg"
                alt="Facebook"
                width={28}
                height={28}
                className=""
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/Instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
                className=""
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/icons/Youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
                className=""
              />
            </Link>
          </div>
        </div>

        {/* Col 2 - Quick Links */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/30 pb-3">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <div className="flex flex-col gap-3">
              {quickLinks1.map((link) => (
                <Link
                  key={link.title + link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {quickLinks2.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Col 3 - Services */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/30 pb-3">
            Services
          </h4>
          <div className="">
            <div className="flex flex-col gap-3">
              {servicesLinks1.map((link) => (
                <Link
                  key={link.title + link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <div className="flex flex-col gap-3">
              {servicesLinks2.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 pb-2"
                >
                  {link.title}
                </Link>
              ))}
            </div> */}
          </div>
        </div>

        {/* Col 4 - Contact Us */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/30 pb-3">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4">
            <p className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
              +91 9535216410
            </p>
            <p className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
              ramesh.kumar@rninfotech.co.in
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-sm md:text-base leading-relaxed hover:text-white transition-colors"
            >
              23/2, Jaraganahalli Grama Main road, GKM College Road,
              Jaraganahalli, Bengaluru, Karnataka, 560078
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-6 sm:px-10 lg:px-16 py-6 flex flex-col items-center gap-2 text-center">
        <p className="text-white/70 text-xs sm:text-sm">
          © 2026 &nbsp; The content on this website is owned by us and our
          licensors
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="" className="hover:text-white transition-colors">
            Do Not Sell/Share My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
