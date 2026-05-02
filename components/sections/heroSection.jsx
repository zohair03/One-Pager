"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import SecondaryBtn from "../ui/buttons/secondaryBtn";
import HeroHeading from "../ui/texts/HeroHeading";
import HeroSubtitle from "../ui/texts/HeroSubtitle";

// How many viewport-heights of scroll space to map the full video.
// For a ~3s video, 400vh gives a comfortable scrub feel.
const SCROLL_HEIGHT_VH = 400;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);
  const isSeeking = useRef(false);
  const pendingTime = useRef(null);

  // Mount animation for text entrance
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Scroll-driven video scrubbing
  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    // Safely seek the video, queuing if already seeking
    const safeSeek = (time) => {
      if (!isFinite(time) || !isFinite(video.duration)) return;
      // Clamp to valid range
      const clampedTime = Math.min(Math.max(time, 0), video.duration);

      if (video.seeking) {
        // Queue the latest target; we'll apply it when the current seek completes
        pendingTime.current = clampedTime;
        return;
      }

      if (Math.abs(video.currentTime - clampedTime) > 0.01) {
        isSeeking.current = true;
        video.currentTime = clampedTime;
      }
    };

    // When a seek finishes, apply any queued seek
    const onSeeked = () => {
      isSeeking.current = false;
      if (pendingTime.current !== null) {
        const t = pendingTime.current;
        pendingTime.current = null;
        safeSeek(t);
      }
    };

    const scrubVideo = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const scrollableHeight = wrapper.offsetHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;

        // Progress: 0 at top of wrapper, 1 when wrapper is fully scrolled
        const rawProgress = -rect.top / scrollableHeight;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        if (video.duration && isFinite(video.duration)) {
          safeSeek(progress * video.duration);
        }
      });
    };

    // Initialize once video is ready for seeking
    const init = () => {
      video.pause();
      // Force video to start at frame 0
      video.currentTime = 0;
      // Sync to current scroll position after a short delay
      // (ensures the browser has settled any scroll restoration)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrubVideo();
        });
      });
    };

    video.addEventListener("seeked", onSeeked);

    if (video.readyState >= 2) {
      // HAVE_CURRENT_DATA — enough data to display current frame
      init();
    } else {
      video.addEventListener("loadeddata", init);
    }

    window.addEventListener("scroll", scrubVideo, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrubVideo);
      video.removeEventListener("loadeddata", init);
      video.removeEventListener("seeked", onSeeked);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    /* Tall wrapper creates the scroll runway for the video */
    <div ref={wrapperRef} style={{ height: `${SCROLL_HEIGHT_VH}vh` }}>
      {/* Sticky container pins the hero in the viewport while scrolling */}
      <div className="sticky top-0 h-screen">
        <section className="relative flex flex-col items-center justify-center h-full max-[380px]:px-4 p-8 py-12 overflow-hidden bg-black">
          {/* Scroll-driven Video Background */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            poster="/images/rn-infotech-24.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/images/laptop-repair-video-bg.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-6">
            <HeroHeading
              text="Your Trusted Partner for Next-Gen Tech & Networking"
              custom={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            />
            <HeroSubtitle
              text="From high-performance laptops and mobile parts to enterprise-grade
              server systems, RN Infotech delivers quality hardware and networking
              components right to your doorstep"
              custom={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            />

            <div
              className={`w-[90%] md:w-fit flex flex-col sm:flex-row gap-5 md:gap-5
                transition-all duration-700 ease-out
                ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <PrimaryBtn href="/" btnText="View Services" />
              <SecondaryBtn
                href="/"
                custom="border border-light-blue"
                btnText="Shop Now"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
