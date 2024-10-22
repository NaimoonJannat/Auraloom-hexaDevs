import Image from 'next/image';
import React from 'react';
import { CiMicrophoneOn } from "react-icons/ci";
import img1 from '../../../public/pexels-brett-sayles-3990842.jpg'
import img2 from '../../../public/kenny-eliason-h0rXrHzhFXU-unsplash.jpg'
import img3 from '../../../public/convertkit-soon-to-be-kit--CbLJAUI_js-unsplash.jpg'
import { FaPlay } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";

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

            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 ">

                        <div className="flex flex-col overflow-hidden rounded-lg border-2 bg-white hover:border-[#0077b6] max-w-96">
                            <div href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">

                                <Image
                                    src={img2}
                                    alt="Movie"
                                    className="absolute inset-0  object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                                <div className=" relative flex justify-end pt-2">
                                    <h2 className="btn bg-slate-200 text-lg scale-75 rounded-full text-black"><IoHeadsetOutline className='text-xl' />Life-Style </h2>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <span className="text-sm text-gray-400 mb-1">July 19, 2021</span>
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-[#0077b6] active:text-[#0077b6] text-xl font-bold">New trends in Tech</a>
                                </h2>
                                <hr />

                                <p className="mb-8 mt-2 text-gray-500">This is a section of some simple filler text, also known as placeholder text. </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <Image
                                                src={img1}
                                                alt="Movie"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-[#0077b6] font-semibold">Hosted By:</span>
                                            <span className="block text-sm text-gray-400">Mike Lane</span>

                                        </div>
                                    </div>

                                    <span className="btn bg-white rounded-full border-2 text-sm hover:border-[#0077b6] scale-90"><FaPlay className='text-gray-500' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-lg border-2 bg-white hover:border-[#0077b6] max-w-96">
                            <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                {/* <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}
                                <Image
                                    src={img1}
                                    alt="Movie"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                                <div className=" relative flex justify-end pt-2">
                                    <h2 className="btn bg-slate-100 text-lg scale-75 rounded-full text-black hover:text-white"><IoHeadsetOutline className='text-xl' />Life-Style </h2>
                                </div>
                            </a>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <span className="text-sm text-gray-400 mb-1">July 19, 2021</span>
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600 text-xl font-bold">New trends in Tech</a>
                                </h2>
                                <hr />

                                <p className="mb-8 mt-2 text-gray-500">This is a section of some simple filler text, also known as placeholder text. </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            {/* <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="h-full w-full object-cover object-center" /> */}
                                            <Image
                                                src={img3}
                                                alt="Movie"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500 ">Hosted By:</span>
                                            <span className="block text-sm text-gray-400">Mike Lane</span>

                                        </div>
                                    </div>

                                    <span className="btn bg-white rounded-full border text-sm text-gray-500 scale-90"><FaPlay /></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-lg  bg-white hover:border-[#0077b6] border-2 max-w-96">
                            <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                {/* <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}
                                <Image
                                    src={img3}
                                    alt="Movie"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                                <div className=" relative flex justify-end pt-2">
                                    <h2 className="btn bg-slate-100 text-lg scale-75 rounded-full text-black hover:text-white"><IoHeadsetOutline className='text-xl' />Life-Style </h2>
                                </div>
                            </a>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <span className="text-sm text-gray-400 mb-1">July 19, 2021</span>
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600 text-xl font-bold">New trends in Tech</a>
                                </h2>
                                <hr />

                                <p className="mb-8 mt-2 text-gray-500">This is a section of some simple filler text, also known as placeholder text. </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            {/* <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="h-full w-full object-cover object-center" /> */}
                                            <Image
                                                src={img2}
                                                alt="Movie"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500 ">Hosted By:</span>
                                            <span className="block text-sm text-gray-400">Mike Lane</span>

                                        </div>
                                    </div>

                                    <span className="btn bg-white rounded-full border text-sm text-gray-500 scale-90"><FaPlay /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopContent;