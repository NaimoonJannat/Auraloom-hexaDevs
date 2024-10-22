"use client";

import Lottie from "lottie-react";
import bannerAnimation from "/public/banner-1.json";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const Banner2 = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/banner-bg.jpg')] bg-center bg-cover pb-20 mb-6 lg:mx-0 min-h-[800px] font-montserrat flex items-center text-white -mt-20 ">
        <div className="container mx-3 lg:mx-auto lg:text-start text-center mt-20">
          <h3 className="lg:text-6xl text-2xl font-bold">
          Discover, Create, Connect
          </h3>
          <h3 className="lg:text-6xl text-2xl font-bold mt-3">
          with the Audience!
          </h3>
          <p className="mt-6 lg:w-1/2 leading-7">Share your podcasts, discover new voices, and connect with listeners who want to hear you! Join our community today and amplify your voice!!</p>
          <button className="btn uppercase mt-6 rounded-full bg-transparent text-white hover:bg-[#01beca] hover:text-black hover:border-0">
            <Link href="/podcast">Browse All</Link>
          </button>
        </div>
      </div>
    </div>
    // <div className="">
    //   <div className="hero h-[780px] mt-8 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/banner1.jpeg')]  bg-cover border border-transparent rounded-xl">
    //     <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
    //     <div className="hero-content text-center flex flex-col items-center justify-center gap-4 md:gap-6 leading-loose text-neutral-content">
    //       {/* animation */}
    //       <Lottie
    //         className="w-4/5 md:w-1/3 lg:w-1/3 lg:h-1/3 -mt-12"
    //         animationData={bannerAnimation}
    //         loop={true}
    //       />
    //       {/* text content */}
    //       <div className="text-white font-montserrat -mt-20">
    //         <h1 className="mb-4 md:mb-6 lg:mb-10 text-2xl md:text-4xl lg:text-5xl font-bold font-indie">
    //           Discover, Create, Connect!
    //         </h1>
    //         <p className="mb-5 font-semibold text-lg md:text-2xl font-indie flex flex-col gap-2 tracking-wide">
    //           <span>
    //             Share your podcasts, discover new voices, and connect with
    //             listeners who want to hear you!{" "}
    //           </span>
    //           <span>Join our community today and amplify your voice!! </span>
    //         </p>
    //         <label className="input input-bordered flex w-fit mx-auto  items-center gap-2 mt-12">
    //           <input type="text" className="w-fit" placeholder="Search" />
    //           <IoIosSearch />
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner2;
