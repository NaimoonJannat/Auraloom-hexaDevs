'use-client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import img1 from '../../../public/avatar.jpg';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';
import axios from 'axios';

const AddToPlaylist = ({ id }) => {

    const { user } = useContext(AuthContext);
    const [playlist, setPlaylist] = useState(null);

    // useEffect(() => {
    //     const fetchPlaylist = async () => {
    //         if (id) {
    //             try {
    //                 const response = await axios.get(`https://auraloom-backend.vercel.app/playlists/${id}`);
    //                 setPlaylist(response.data);
    //             } catch (error) {
    //                 console.error('Error fetching playlist:', error);
    //             }
    //         }
    //     };
    //     fetchPlaylist();
    // }, [id]);

    useEffect(() => {
        console.log("Playlist ID:", id);  // Log the id to verify
        const fetchPlaylist = async () => {
            if (id) {
                try {
                    const response = await axios.get(`http://localhost:5000/playlists/${id}`);
                    setPlaylist(response.data);
                    //console.log(playlist)
                } catch (error) {
                    console.error('Error fetching playlist:', error);
                }
            }
        };
        fetchPlaylist();
    }, [id]);



    // if (!playlist) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <CirclesWithBar height={80} width={80} color="#0077b6" />
    //         </div>
    //     );
    // }

    return (
        <div>
            {playlist ? (
                <>
                    <h1>{playlist.name}</h1>
                    <Image
                        src={playlist?.image}
                        alt={playlist?.name || 'Playlist Image'}
                        width={500}
                        height={500}
                        priority // <--- Add priority for above-the-fold images
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Rest of the JSX content */}
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <CirclesWithBar height={80} width={80} color="#0077b6" />
                </div>
            )}


            {/* BANNER */}
            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <section className=" relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                        <Image
                            src={img1 || '/default-image.jpg'} // Provide a fallback image path
                            alt={'image'}
                            width={500}
                            height={500}
                            className="absolute inset-0 w-full object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-[#0077b6] mix-blend-multiply"></div>

                        <div className="relative flex flex-col items-center p-4 sm:max-w-2xl">
                            {/* <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p> */}
                            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Let us start building your playlist</h1>

                            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

                                <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

            {/* USER INFO */}
            <div className="rounded-xl p-4 ring sm:p-6 lg:p-8 mx-8">
                <div className="flex items-center sm:gap-8">
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
                        {/* <strong
                            className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                        >
                            Episode #101
                        </strong> */}

                        <h3 className="text-2xl font-bold transition duration-100 hover:text-gray-500 lg:text-3xl">
                            <a href="#" className="hover:underline"> Beats </a>
                        </h3>

                        <span className="mt-1 ">
                            by Sayeed Hossain
                        </span>

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
                                <a href="#" className="underline hover:text-gray-700"> Others...</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center scale-90 my-10">

                <button type="button" onClick={() => document.getElementById('my_modal_1').showModal()} className="px-8 py-3 font-semibold rounded-full border border-[#0077b6] flex items-center gap-2 text-lg">Add to the playlist <IoIosAddCircleOutline className='text-3xl pt-1 font-bold' /> </button>

            </div>

            {/* MODAL */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-4xl">
                    {/* CARD */}
                    <div className="">
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