const marqueeItems = [
  "Free Shipping on bulk orders! ",
  "Call us at +91 9535216410 for expert advice",
  "Visit our store in Jaraganahalli, Bengaluru",
  "Genuine Parts Guaranteed!",
  "Leading Dealers in Server Systems & Networking Components.",
];

const Marquee = () => {
  return (
    <div className=" font-bitcount w-full overflow-hidden bg-[#370F02] py-4 md:py-4 border-y border-dotted border-orange-300 group">
      <div
        className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {/* First set */}
        {marqueeItems.map((item, i) => (
          <span
            key={`a-${i}`}
            className="text-shadow-[0_0_10px] text-shadow-orange-500  text-2xl md:text-2xl font-normal text-orange-200 mx-6 md:mx-10"
          >
            {item}
          </span>
        ))}

        {/* Duplicate set for seamless loop */}
        {marqueeItems.map((item, i) => (
          <span
            key={`b-${i}`}
            className="text-shadow-[0_0_10px] text-shadow-orange-500  text-2xl md:text-2xl font-normal text-orange-200 mx-6 md:mx-10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;