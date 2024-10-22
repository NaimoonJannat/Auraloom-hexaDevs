"use client";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import bannerAnimation from "/public/banner-2.json";
import Link from "next/link";

const Banner1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only the first time it enters the viewport
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div className="mt-10 sm:mt-16 lg:mt-20 px-4 md:px-8">
      <div className="hero h-[400px] sm:h-[450px] lg:h-[500px] bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/banner2.jpg')] bg-center bg-cover border border-transparent rounded-xl">
        <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
        <div className="hero-content text-center flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-8 text-neutral-content">
          
          {/* animation */}
          <div ref={ref} className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0">
            {inView && (
              <Lottie
                className="w-full h-full"
                animationData={bannerAnimation}
                loop={false}
              />
            )}
          </div>

          {/* text content */}
          <div className="text-[#90E0EF] lg:w-1/2">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-indie leading-tight sm:leading-snug">
              Got a Story to Tell?
            </h1>
            <p className="mb-5 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-indie flex flex-col gap-2 tracking-wide">
              <span>Share your podcasts, discover new voices, and connect with listeners who want to hear you!</span>
              <span>Join our community today and amplify your voice!</span>
            </p>
            <Link href={"/idea-generate"} className="block mt-5 w-auto mx-auto lg:mx-0 rounded-lg bg-sky-500 px-6 sm:px-8 py-3 text-center text-sm sm:text-base font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-black focus-visible:ring active:bg-gray-600">
              Idea Generate With AuraPod AI →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
