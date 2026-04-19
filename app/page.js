import Image from "next/image";
import WhyChooseUs from "@/components/sections/whyChooseUsSection";
import Services from "@/components/sections/servicesSection";
import Hero from "@/components/sections/heroSection";
import Reviews from "@/components/sections/reviewsSection";
import FinalCta from "@/components/sections/finalCtaSection";
import TextAndImage from "@/components/sections/textAndImageSection";
import AboutUs from "@/components/sections/aboutusSection";
import Marquee from "@/components/ui/marqueeText";
import Faqs from "@/components/sections/faqSection";

const faqs = [
  {
    id: 1,
    question: "Do you provide bulk components for businesses?",
    answer:
      "Yes, we specialise in server systems and networking components for both SMEs and large enterprises.",
  },
  {
    id: 2,
    question: "Can I buy parts online?",
    answer:
      "Absolutely. Our platform is designed for seamless online retail across India.",
  },
  {
    id: 3,
    question: "Where is your physical office located?",
    answer:
      "We are located at Jaraganahalli Grama Main Road, Bengaluru.",
  },
  {
    id: 4,
    question: "Do you offer returns?",
    answer:
      "Yes, we have a clear Cancellation & Return policy available in our footer section.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <Reviews />
      <Faqs faqs={faqs}/>
      <FinalCta />
    </main>
  );
}
