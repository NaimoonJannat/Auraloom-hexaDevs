import Lottie from "lottie-react";
import bannerAnimation1 from "./banner-animation-1.json"
import bannerAnimation2 from "./banner-animation-2.json"
import banner1 from "./banner1.jpeg"
import { IoSearchOutline } from "react-icons/io5";
import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will trigger only the first time it enters the viewport
        threshold: 0.5,    // Trigger when 50% of the element is in view
      });
    return (
        <div className="mt-20">

            {/* Banner Part-1 */}
            <div className="hero mb-44 h-[600px] bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('https://i.ibb.co.com/hCmnwcf/top-view-microphone-with-headphones-min.jpg')] bg-right md:bg-right lg:bg-center bg-cover border border-transparent rounded-xl">
            <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
            <div className=" text-center flex flex-col items-center gap-4 md:gap-6 lg:gap-0  leading-loose text-neutral-content">
                
                {/* text content */}
                <div className="text-gray-200 lg:flex-grow px-5">
                    <h1 className="mb-4 md:mb-6 lg:mb-8 text-2xl md:text-4xl font-bold font-indie">Where your PASSION gets a VOICE!</h1>
                    <p className="mb-5 font-semibold text-lg md:text-xl font-indie flex flex-col gap-2 tracking-wide">
                        <span>Your next favorite podcast is just a click away.   </span>
                        <span>Discover voices that resonate, stories that captivate. </span>
                    </p>
                </div>

            {/* animation */}
            <Lottie className="w-2/5 md:w-1/4 lg:w-1/4" animationData={bannerAnimation1} loop={true} />
            
            {/* Search Bar */}
            <div className="w-2/3 focus-within:w-10/12 md:focus-within:w-11/12">
                <label className="input input-bordered bg-[#C7FFD8] text-[#3BAB5C] font-semibold flex items-center gap-2">
                    <input type="text" className="w-11/12 md:grow" placeholder="Search" />
                    <button> <IoSearchOutline className="text-lg font-semibold"/> </button>
                </label>
            </div>


            {/* Banner Part-2 */}
            </div>
            </div>
            <div>
                <Fade triggerOnce direction="up">
                    <div className="hero h-[600px] bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('https://i.ibb.co.com/rHxY2ZM/pikaso-embed-3-min.jpg')] bg-right md:bg-right lg:bg-center bg-cover border border-transparent rounded-xl">
                        <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
                        <div className=" text-center flex flex-col items-center gap-4 md:gap-6 lg:gap-0  leading-loose text-neutral-content">
                            
                            {/* animation */}
                            <div ref={ref}>
                                {inView && (
                                    <Lottie
                                    className="w-2/5 md:w-1/3 lg:w-2/5 mx-auto"
                                    animationData={bannerAnimation2}
                                    loop={false}
                                    />
                                )}
                            </div>
                            {/* <Lottie className="w-4/5 md:w-1/3 lg:w-2/5" animationData={bannerAnimation2} loop={false} /> */}

                            {/* text content */}
                            <div className="text-gray-200 lg:flex-grow">
                                <h1 className="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold font-indie">Amplify your world!</h1>
                                <p className="mb-5 font-semibold text-lg md:text-xl font-indie flex flex-col gap-2 tracking-wide">
                                    <span>Whether you're a creator or listener,   </span>
                                    <span>Start your audio journey with Auraloom now! </span>
                                </p>
                        </div>
                        
                        {/* Search Bar */}
                        {/* <div className="focus-within:w-full">
                            <label className="input input-bordered bg-[#C7FFD8] text-[#3BAB5C] font-semibold flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <button> <IoSearchOutline className="text-lg font-semibold"/> </button>
                            </label>
                        </div> */}

                        </div>
                    </div>
                </Fade>
            </div>
    </div>
    );
};

export default Banner;