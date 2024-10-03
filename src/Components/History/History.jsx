'use client';
import Image from 'next/image';
import React from 'react';

const History = () => {


    return (
        <div>
            <span className="relative flex justify-center my-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>

                <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6]">History</span>
            </span>

            {/* BUTTON */}
            <div className="rounded-lg border-none p-1 mx-auto max-w-screen-xl px-4 md:px-8 scale-75">
                <button
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:text-[#00b4d8] text-[#0077b6] focus:relative"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>

                    Edit
                </button>

                <button
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:text-[#00b4d8] text-[#0077b6] focus:relative"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    View All
                </button>

                <button
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm hover:text-[#00b4d8] text-[#0077b6] shadow-sm focus:relative"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>

                    Delete
                </button>
            </div>

            {/* CARD */}
            <div className="bg-white ">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                    <div className="">

                        <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-75">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <Image
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Image description"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    width={600}  // specify the width based on the image's size
                                    height={400} // specify the height based on the image's aspect ratio
                                />
                            </a>


                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400">July 19, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">New trends in Tech</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-75">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <Image
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Image description"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    width={600}  // specify the width based on the image's size
                                    height={400} // specify the height based on the image's aspect ratio
                                />
                            </a>


                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400">April 07, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">Working with legacy stacks</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-75">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <Image
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Image description"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    width={600}  // specify the width based on the image's size
                                    height={400} // specify the height based on the image's aspect ratio
                                />
                            </a>

                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400">March 15, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">10 best smartphones for devs</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-75">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <Image
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Image description"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    width={600}  // specify the width based on the image's size
                                    height={400} // specify the height based on the image's aspect ratio
                                />
                            </a>


                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400">January 27, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">8 High performance Notebooks</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;