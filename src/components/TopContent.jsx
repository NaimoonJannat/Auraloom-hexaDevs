import Image from 'next/image';
import React from 'react';
import { CiMicrophoneOn } from "react-icons/ci";
import img1 from '../../public/pexels-brett-sayles-3990842.jpg'
import img2 from '../../public/kenny-eliason-h0rXrHzhFXU-unsplash.jpg'
import img3 from '../../public/convertkit-soon-to-be-kit--CbLJAUI_js-unsplash.jpg'


const TopContent = () => {
    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>

                <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6] font-montserrat">Top Content</span>
            </span>

            {/* CARD */}

            <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 font-montserrat '>
                <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow scale-90">
                    <div>
                        <Image className="w-full object-cover" src={img1} alt='' />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                        <div className='flex items-center gap-2'>
                            <p className="mb-1 text-sm text-white text-opacity-80">Andrea Felsted</p>
                            <CiMicrophoneOn className='text-[#00b4d8] text-lg' />
                        </div>

                        <h3 className="text-xl font-medium text-white">How to Study Abroad </h3>
                        <p className="mt-1 text-[#caf0f8] text-opacity-80 text-xs">Choose your favourite study programmes and compare them</p>
                    </div>
                </div>
                <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow scale-90">
                    <div>
                        <Image className="w-full object-cover" src={img2} alt='' />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                        <div className='flex items-center gap-2'>
                            <p className="mb-1 text-sm text-white text-opacity-80">Naimoon Jannat</p>
                            <CiMicrophoneOn className='text-[#00b4d8] text-lg' />
                        </div>

                        <h3 className="text-xl font-medium text-white">How to Lead a Team</h3>
                        <p className="mt-1 text-[#caf0f8] text-opacity-80 text-xs">Mentorship and skill sharing are a massively powerful tool for any leader.</p>
                    </div>
                </div>
                <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow scale-90">
                    <div>
                        <Image className="w-full object-cover" src={img3} alt='' />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                        <div className='flex items-center gap-2'>
                            <p className="mb-1 text-sm text-white text-opacity-80">Sayeed Hossain</p>
                            <CiMicrophoneOn className='text-[#00b4d8] text-lg' />
                        </div>

                        <h3 className="text-xl font-medium text-white">How to Blame Your Team</h3>
                        <p className="mt-1 text-[#caf0f8] text-opacity-80 text-xs">When your team perceives that you have not met their expectations, trust is compromised.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopContent;