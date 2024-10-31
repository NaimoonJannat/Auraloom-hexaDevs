'use-client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
//import img1 from '../../../public/avatar.jpg';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';
import axios from 'axios';

const AddToPlaylist = ({ id }) => {

    const { user } = useContext(AuthContext);
    const [playlist, setPlaylist] = useState(null);
    const [podcasts, setPodcasts] = useState([]);


    // Fetch playlist details based on the provided ID
    useEffect(() => {
        console.log("Playlist ID:", id);  // Log the id to verify
        const fetchPlaylist = async () => {
            if (id) {
                try {
                    const response = await axios.get(`https://auraloom-backend.vercel.app/playlist-detail/${id}`);
                    setPlaylist(response.data);
                    //console.log(playlist)
                } catch (error) {
                    console.error('Error fetching playlist:', error);
                }
            }
        };
        fetchPlaylist();
    }, [id]);


    // Fetch all podcasts to show in the modal
    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await axios.get('https://auraloom-backend.vercel.app/podcasts');
                setPodcasts(response.data);  // Save podcasts data
            } catch (error) {
                console.error('Error fetching podcasts:', error);
            }
        };
        fetchPodcasts();
    }, []);

    return (
        <div>

            {playlist ? (
                <>
                    <div className="py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <section className="relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                                <Image
                                    src={playlist.image || '/path/to/fallback-image.jpg'} // Provide a fallback image path
                                    alt="Background image"
                                    layout="fill"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />

                                {/* Gradient overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 opacity-70"></div>

                                <div className="relative z-10 flex flex-col items-center p-4 sm:max-w-2xl">
                                    <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                                        Let us start building your playlist
                                    </h1>

                                    <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                        <a
                                            href="#"
                                            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                                        >
                                            Start now
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-800 md:text-base"
                                        >
                                            Take tour
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>


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
                                <h3 className="text-2xl font-bold transition duration-100 hover:text-gray-500 lg:text-3xl">
                                    <a href="#" className="hover:underline"> {playlist.name} </a>
                                </h3>

                                <span className="mt-1 ">
                                    by {user?.displayName}
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
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <CirclesWithBar height={80} width={80} color="#0077b6" />
                </div>
            )}




            {/* MODAL BUTTON */}
            <div className="flex justify-center my-10">
                <button
                    type="button"
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                    className="px-8 py-3 text-lg font-semibold border border-[#0077b6] rounded-full flex items-center gap-2"
                >
                    Add to the playlist <IoIosAddCircleOutline className="text-3xl pt-1 font-bold" />
                </button>
            </div>

            {/* MODAL */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-4xl p-6">
                    {/* Header */}
                    <h2 className="text-2xl font-semibold text-center mb-4">Add Podcasts to Playlist</h2>

                    {/* Podcasts List */}
                    <div className="max-h-96 overflow-y-auto">
                        {podcasts.length > 0 ? (
                            podcasts.map((podcast) => (
                                <div key={podcast._id} className="flex items-center gap-4 py-4 border-b border-gray-200">
                                    <Image
                                        src={podcast?.imgUrl || '/path/to/fallback.jpg'} // Fallback image
                                        alt={podcast.title}
                                        width={80}
                                        height={80}
                                        className="object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-800 truncate">{podcast.title}</h3>
                                        <p className="text-sm text-gray-400">{podcast.date}</p>
                                        <p className="text-gray-600 truncate">
                                            {podcast.description?.split(" ").slice(0, 10).join(" ")}
                                            {podcast.description?.split(" ").length > 10 && " ..."}
                                        </p>
                                    </div>
                                    <button className="text-2xl text-gray-500 hover:text-[#0077b6]" aria-label="Add to Playlist">
                                        <IoIosAddCircleOutline />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No podcasts available</p>
                        )}
                    </div>

                    {/* Modal Action */}
                    <div className="modal-action mt-4">
                        <form method="dialog">
                            <button className="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default AddToPlaylist;