"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBar from "./topBar";
import NavLinks from "./navLinks";
import MegaMenu from "./megaMenu";
import MobileMenu from "./mobileMenu";
import CallButton from "../../ui/buttons/callButton";
import { aboutLinks, servicesLinks } from "./navData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [megaClosing, setMegaClosing] = useState(false);
  const [navbarBottom, setNavbarBottom] = useState(0);
  const navbarRef = useRef(null);
  const closeTimeoutRef = useRef(null); // ← timeout ref to cancel close
  const pathname = usePathname();

  // Close mega menu on route change
  useEffect(() => {
    setActiveMega(null);
    setMegaClosing(false);
  }, [pathname]);

  const updateNavbarBottom = () => {
    if (navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      setNavbarBottom(rect.bottom);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateNavbarBottom();
    }, 100);

    window.addEventListener("scroll", updateNavbarBottom);
    window.addEventListener("resize", updateNavbarBottom);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateNavbarBottom);
      window.removeEventListener("resize", updateNavbarBottom);
    };
  }, []);

  const openMenu = () => setMenuOpen(true);

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 300);
  };

  const openMega = (name) => {
    // Cancel any pending close when opening
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    updateNavbarBottom();
    setMegaClosing(false);
    setActiveMega(name);
  };

  const closeMega = () => {
    // Delay close so cursor has time to reach mega menu portal
    closeTimeoutRef.current = setTimeout(() => {
      setMegaClosing(true);
      setTimeout(() => {
        setActiveMega(null);
        setMegaClosing(false);
      }, 300);
    }, 100); // ← 100ms delay before starting close
  };

  const cancelClose = (name) => {
    // Cancel close when cursor enters mega menu
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMegaClosing(false);
    setActiveMega(name);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav>
      <div className="fixed top-0 z-50 w-full font-sans" ref={navbarRef}>
        {/* Top Bar */}
        <TopBar />

        {/* Main Navbar */}
        <div
          className="2xl:px-30 relative flex justify-between items-center bg-black/40 backdrop-blur-xl px-4 md:px-8 py-4 md:py-5"
          onMouseLeave={closeMega}
        >
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="font-semibold text-3xl md:text-4xl xl:text-3xl 2xl:text-5xl"
            >
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={200}
                height={200}
                className=""
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <NavLinks activeMega={activeMega} setActiveMega={openMega} />

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-white flex flex-col gap-1.5 p-2"
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <MobileMenu closeMenu={closeMenu} isClosing={menuClosing} />
        )}
      </div>

      {/* Mega Menus */}
      {activeMega === "about" && (
        <MegaMenu
          items={aboutLinks}
          isClosing={megaClosing}
          navbarBottom={navbarBottom}
          onMouseEnter={() => cancelClose("about")}
          onMouseLeave={closeMega}
        />
      )}
      {activeMega === "services" && (
        <MegaMenu
          items={servicesLinks}
          isClosing={megaClosing}
          navbarBottom={navbarBottom}
          onMouseEnter={() => cancelClose("services")}
          onMouseLeave={closeMega}
        />
      )}
    </nav>
  );
};

export default Navbar;
