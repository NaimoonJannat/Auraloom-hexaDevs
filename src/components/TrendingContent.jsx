import Image from 'next/image';
import React from 'react';
import img1 from '../../public/pexels-cottonbro-6686442.jpg'
import img2 from '../../public/pexels-cottonbro-7598552.jpg'
import img3 from '../../public/pexels-cowomen-1058097-2041381.jpg'
import img4 from '../../public/pexels-george-milton-6954162.jpg'

const TrendingContent = () => {
    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>

                <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6] font-montserrat">Trending</span>
            </span>

            {/* CARD */}

            <div class="font-montserrat">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                    <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                        <div class="flex flex-col items-center">
                            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32 border-4 hover:border-[#0077b6]">
                                <Image className="h-full w-full object-cover object-center" src={img1} alt='' />
                            </div>
                            <div>
                                <div class="text-center font-bold text-[#00b4d8] md:text-lg">Monira Islam</div>

                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32 border-4 hover:border-[#0077b6]">
                                <Image className="h-full w-full object-cover object-center" src={img2} alt='' />
                            </div>
                            <div>
                                <div class="text-center font-bold text-[#00b4d8] md:text-lg">Jannatul Ferdaus</div>

                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32 border-4 hover:border-[#0077b6]">
                                <Image className="h-full w-full object-cover object-center" src={img3} alt='' />
                            </div>
                            <div>
                                <div class="text-center font-bold text-[#00b4d8] md:text-lg">Mahbub Sarwar</div>

                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32 border-4 hover:border-[#0077b6]">
                                <Image className="h-full w-full object-cover object-center" src={img4} alt='' />
                            </div>
                            <div>
                                <div class="text-center font-bold text-[#00b4d8] md:text-lg">Raisa Nuzhat</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default TrendingContent;