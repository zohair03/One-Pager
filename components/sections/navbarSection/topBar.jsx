import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-black/40 backdrop-blur-2xl border-b-1  border-[#ffffff1a] flex justify-between items-center py-1.5 px-4 md:px-8 2xl:px-30  text-[0.75rem] text-white/75 relative">
      {/* Subtle bottom glow line */}
      {/* <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(247,109,54,0.3) 30%, rgba(247,109,54,0.5) 50%, rgba(247,109,54,0.3) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      /> */}

      {/* Left group: Reviews + Phone */}
      <div className="flex items-center gap-1.5">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="font-bold text-base text-white tracking-tight">
            5.0
          </span>
          <div className="flex items-center gap-px px-0.5">
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
            href="https://www.google.com/maps/place/Lamington+Rd,+Mumbai,+Maharashtra/@18.9623965,72.8152546,17z"
            target="_blank"
            className="text-[0.7rem] text-white/50 hover:text-primary transition-colors duration-200"
          >
            (42)
          </Link>
        </div>
      </div>

      {/* Right group: Location */}
      <div className="flex items-center">
        <Link
          href="https://www.google.com/maps/place/Lamington+Rd,+Mumbai,+Maharashtra/@18.9623965,72.8152546,17z"
          target="_blank"
          className="flex items-center gap-1.5 text-white/70 hover:text-primary transition-colors duration-200 text-[0.75rem]"
        >
          {/* <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-65 shrink-0"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg> */}
          <Image
            src="/icons/location.svg"
            alt="Location"
            width={18}
            height={18}
            className="color-location"
          />
          <span className="text-base">Jaraganahalli, Bengaluru</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;

// bg-[#370f02] border-b border-[rgba(247,109,54,0.15)]