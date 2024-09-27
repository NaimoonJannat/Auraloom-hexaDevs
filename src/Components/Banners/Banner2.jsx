"use client"

import Lottie from "lottie-react";
import bannerAnimation from "/public/banner-1.json"
import { IoIosSearch } from "react-icons/io";

const Banner2 = () => {
    return (
        <div className="mt-20">
      <div className="hero h-[680px] bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/banner1.jpeg')]  bg-cover border border-transparent rounded-xl">
        <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
        <div className="hero-content text-center flex flex-col items-center justify-center gap-4 md:gap-6 leading-loose text-neutral-content">
            {/* animation */}
            <Lottie className="w-4/5 md:w-1/3 lg:w-1/3 lg:h-1/3" animationData={bannerAnimation} loop={true} />
            {/* text content */}
            <div className="text-[#90E0EF]">
                <h1 className="mb-4 md:mb-6 lg:mb-10 text-2xl md:text-4xl lg:text-5xl font-bold font-indie">Discover, Create, Connect!</h1>
                <p className="mb-5 font-semibold text-lg md:text-2xl font-indie flex flex-col gap-2 tracking-wide">
                    <span>Share your podcasts, discover new voices, and connect with listeners who want to hear you!  </span>
                    <span>Join our community today and amplify your voice!! </span>
                </p>
                <label className="input input-bordered flex w-fit mx-auto  items-center gap-2">
                    <input type="text" className="w-fit" placeholder="Search" />
                    <IoIosSearch />
                </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner2;