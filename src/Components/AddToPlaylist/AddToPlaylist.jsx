'use-client';
import Image from 'next/image';
import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

const AddToPlaylist = () => {
    return (
        <div>
            {/* <section class="text-neutral-700 dark:text-neutral-300 mx-auto">
                <div class="grid gap-6 text-center md:grid-cols-3">
                    <div>
                        <div
                            class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                            <div
                                class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                            </div>
                            <div class="p-6">
                                <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                                <hr />
                                <p class="mt-4">
                                    <span class="inline-block pe-2 [&>svg]:w-5"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">

                                            <path
                                                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                        </svg>
                                    </span>
                                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                                    ducimus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mt-10">
                <div className="flex items-start sm:gap-8">
                    <div
                        className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                        aria-hidden="true"
                    >
                        <div className="flex items-center gap-1">
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                        </div>
                    </div>

                    <div>
                        <strong
                            className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                        >
                            Episode #101
                        </strong>

                        <h3 className="mt-4 text-lg font-medium sm:text-xl">
                            <a href="#" className="hover:underline"> Some Interesting Podcast Title </a>
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit
                            rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus, aperiam voluptas
                            exercitationem facere aliquid fuga. Sint.
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500">
                                <svg
                                    className="size-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>

                                <p className="text-xs font-medium">48:32 minutes</p>
                            </div>

                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>,
                                <a href="#" className="underline hover:text-gray-700">Sandra</a> and
                                <a href="#" className="underline hover:text-gray-700">August</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <div className="flex justify-center scale-90">
                <button type="button" onClick={() => document.getElementById('my_modal_1').showModal()} className="px-8 py-3 font-semibold rounded-full bg-slate-200 hover:bg-[#90e0ef] flex items-center gap-2 text-lg">Add here <IoIosAddCircleOutline className='text-xl text-[#0077b6] font-bold' /> </button>
            </div>

            {/* MODAL */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-4xl">
                    {/* CARD */}
                    <div className="bg-white ">
                        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                            <div className="">

                                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-90">
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

                                        <p className="">This is a section of some simple filler text... </p>

                                        <div>
                                            <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                        </div>
                                    </div>

                                    <div>
                                        <button className='lg:pl-10'><IoIosAddCircleOutline className='text-3xl font-bold hover:text-[#0077b6]' /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-90">
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

                                        <p className="">This is a section of some simple filler text... </p>

                                        <div>
                                            <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                        </div>
                                    </div>

                                    <div>
                                        <button className='lg:pl-10'><IoIosAddCircleOutline className='text-3xl font-bold hover:text-[#0077b6]' /></button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddToPlaylist;