import Link from "next/link";
import { navLinks, aboutLinks, servicesLinks } from "./navData";
import MegaMenu from "./megaMenu";

const NavLinks = ({ activeMega, setActiveMega }) => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/", mega: "about" },
    { title: "Services", href: "/", mega: "services" },
    { title: "Gallery", href: "/" },
    { title: "Contact Us", href: "/" },
    { title: "Blog", href: "/" },
  ];

  return (
    <div className="flex hidden lg:flex justify-center items-center gap-8">
      {links.map((link) => (
        <div
          key={link.title}
          onMouseEnter={link.mega ? () => setActiveMega(link.mega) : undefined}
          className="flex items-center gap-1 cursor-pointer group"
        >
          <Link
            href={link.href}
            className="relative text-white text-shadow-lg text-base font-semibold no-underline py-1 transition-colors duration-200 hover:text-[#7B52AB] group"
          >
            {link.title}
          </Link>
          {link.mega && (
            <svg
              className={`w-3.5 h-3.5 text-white transition-all duration-200 group-hover:text-[#7B52AB] ${
                activeMega === link.mega ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

