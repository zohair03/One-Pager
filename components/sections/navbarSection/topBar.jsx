import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="2xl:px-30 flex justify-between items-center max-[380px]:px-2 py-2 px-4 md:px-8 bg-[#1d1613] text-white font-medium">
      {/* Reviews */}
      <div className="flex gap-1 items-center w-fit">
        <div className="max-[380px]:text-[14px] text-[16px] md:text-[16px] font-bold">5.0</div>
        <div className="flex w-fit p-1">
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
          className="max-[380px]:text-[8px] text-[11px] md:text-[13px] font-light"
        >
          (42)
        </Link>
      </div>

      {/* Location */}
      <div className="flex gap-1 items-center">
        <Image
          src="/icons/location-fill.svg"
          width={16}
          height={16}
          alt="location icon"
          className="icon-color"
        />
        <Link
          href="https://www.google.com/maps/place/Lamington+Rd,+Mumbai,+Maharashtra/@18.9623965,72.8152546,17z"
          target="_blank"
          className="max-[380px]:text-xs text-sm lg:text-lg xl:text-base"
        >
          Jaraganahalli, Bengaluru
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
