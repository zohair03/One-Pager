import Image from "next/image";
import Link from "next/link";

const TopBar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="bg-[#DED2FF] flex justify-between items-center py-3 px-4 md:px-8 2xl:px-30 relative border-b border-black/5">
      {/* Left group: Reviews */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base text-black tracking-tight">
            5.0
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/icons/reviews-star.svg"
                alt="Reviews stars"
                width={16}
                height={16}
                className="color-review-star"
              />
            ))}
          </div>
          <Link
            href="#"
            className="text-[0.85rem] text-black/80 underline decoration-black/30 underline-offset-2 hover:text-primary transition-colors"
          >
            (42 Reviews)
          </Link>
        </div>
      </div>

      {/* Right group: Location + Phone (Desktop) or Hamburger (Mobile) */}
      <div className="flex items-center">
        {/* Desktop Info */}
        <div className="hidden lg:flex items-center">
          {/* Location */}
          <div className="flex items-center gap-2 px-6 border-l border-black/10">
            <Image
              src="/icons/location-fill.svg"
              alt="Location"
              width={18}
              height={18}
              className="opacity-70"
            />
            <p className="text-[0.85rem] text-black/80 font-medium">
              Proudly Serving: <span className="font-bold">San Francisco, Marin, Napa</span>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 px-6 border-l border-black/10">
            <Image
              src="/icons/call.svg"
              alt="Phone"
              width={18}
              height={18}
              className="opacity-70"
            />
            <p className="text-[0.85rem] text-black/80 font-medium">
              Call or Text: <span className="font-bold">(415) 555-7777</span>
            </p>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-l border-black/10 pl-4 ml-2"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;