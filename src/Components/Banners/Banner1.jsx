"use client";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import bannerAnimation from "/public/banner-2.json";

const Banner1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only the first time it enters the viewport
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div className="mt-20">
      <div className="hero h-[500px] bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/banner2.jpg')] bg-right md:bg-right lg:bg-center bg-cover border border-transparent rounded-xl">
        <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
        <div className="hero-content text-center flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-16 leading-loose text-neutral-content">
          {/* animation */}
          <div ref={ref}>
            {inView && (
              <Lottie
                className="w-4/5 md:w-1/3 lg:w-3/4"
                animationData={bannerAnimation}
                loop={false}
              />
            )}
          </div>

          {/* text content */}
          <div className="text-[#90E0EF]">
            <h1 className="mb-4 md:mb-6 lg:mb-10 text-4xl md:text-5xl lg:text-6xl font-bold font-indie">
              Got a Story to Tell?
            </h1>
            <p className="mb-5 font-semibold text-lg md:text-2xl font-indie flex flex-col gap-2 tracking-wide">
              <span>
                Share your podcasts, discover new voices, and connect with
                listeners who want to hear you!{" "}
              </span>
              <span>Join our community today and amplify your voice!! </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
