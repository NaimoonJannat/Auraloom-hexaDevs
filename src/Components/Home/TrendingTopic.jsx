import Image from 'next/image';
import img1 from '../../../public/pexels-chuck-3587477.jpg'
import img2 from '../../../public/pexels-karolina-grabowska-4476138.jpg'
import { IoHeadsetOutline } from "react-icons/io5";

import Link from 'next/link';

const TrendingTopic = () => {
    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>
                <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6] font-montserrat">Trending</span>
            </span>

            <div className='grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16'>
                <div className='border rounded-xl hover:border-[#0077b6]'>
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 p-4">
                        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <Image
                                src={img1}
                                alt="Movie"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </a>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">July 19, 2021</span>

                            <h2 className="text-xl font-bold">
                                <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">Pandemic Becoming Endemic</a>
                            </h2>
                            <hr />
                            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                            <div>
                                <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex gap-4 px-4 items-center'>
                            <IoHeadsetOutline className='text-xl' />
                            <button className='btn btn-xs border border-black rounded-md'>Health</button>
                        </div>
                        <div className='flex items-center px-4'>
                            <h2>Hosted by:</h2>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                {/* <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" /> */}
                                <Image
                                    src={img2}
                                    alt="Movie"
                                    className="object-cover w-8 h-8 mx-4 rounded-full dark:bg-gray-500"
                                />

                            </a>
                        </div>
                    </div>
                </div>
                <div className='border rounded-xl hover:border-[#0077b6]'>
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 p-4">
                        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">

                            <Image
                                src={img2}
                                alt="Movie"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </a>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">July 19, 2021</span>

                            <h2 className="text-xl font-bold">
                                <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">Pandemic Becoming Endemic</a>
                            </h2>
                            <hr />
                            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                            <div>
                                <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex gap-4 px-4 items-center'>
                            <IoHeadsetOutline className='text-xl' />
                            <button className='btn btn-xs border border-black rounded-md'>Life-Style</button>
                        </div>
                        <div className='flex items-center px-4'>
                            <h2>Hosted by:</h2>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                {/* <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" /> */}
                                <Image
                                    src={img1}
                                    alt="Movie"
                                    className="object-cover w-8 h-8 mx-4 rounded-full dark:bg-gray-500"
                                />

                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrendingTopic;