'use-client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoPlayCircle } from 'react-icons/io5';
import { FiShare2, FiEdit3 } from 'react-icons/fi';
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



    const handleAddToPlaylist = async (podcast) => {
        if (!playlist) return;

        // Optimistic UI update
        const updatedPlaylist = {
            ...playlist,
            podcasts: [...(playlist.podcasts || []), podcast]
        };
        setPlaylist(updatedPlaylist);

        try {
            // Send request to the backend to update the playlist
            const response = await axios.put(`https://auraloom-backend.vercel.app/playlists/${id}/add-podcast`, {
                podcast
            });

            // If successful, update the playlist with the response data
            setPlaylist(response.data);
        } catch (error) {
            console.error("Error adding podcast to playlist:", error);

            // Rollback optimistic update if the request fails
            setPlaylist((prev) => ({
                ...prev,
                podcasts: prev.podcasts.filter((p) => p._id !== podcast._id)
            }));
            alert("Failed to add podcast. Please try again.");
        }
    };




    return (
        <div>

            <div className="container mx-auto px-4">
                {playlist ? (
                    <>

                        {/* Playlist Info Section */}
                        <div className="rounded-xl p-4 sm:p-6 lg:p-8 m-4 sm:mx-8 lg:mx-12 bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg">
                            <div className="flex flex-col sm:flex-row sm:gap-8 items-center text-white">
                                {/* Playlist Image */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-300 shadow-md">

                                    <Image
                                        src={playlist.image || '/default-image.jpg'} // Provide a fallback image path
                                        alt={playlist.name || 'Playlist Image'}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Playlist Details */}
                                <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
                                    <h3 className="text-2xl font-semibold lg:text-3xl">
                                        <a href="#" className="hover:underline">
                                            {playlist.name}
                                        </a>
                                    </h3>
                                    <span className="block text-gray-300 mt-1">by {user?.displayName}</span>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-4">
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <p className="text-xs font-medium">48:32 minutes</p>
                                        </div>
                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                                        <p className="text-xs font-medium text-gray-400">
                                            Featuring <a href="#" className="underline hover:text-gray-200">Barry</a>, <a href="#" className="underline hover:text-gray-200">Sandra</a> and <a href="#" className="underline hover:text-gray-200">Others...</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Play Button */}
                                <button className="flex items-center space-x-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-200 shadow-md mt-4 sm:mt-0">
                                    <span className="text-sm font-semibold">Play now</span>
                                    <IoPlayCircle size={20} />
                                </button>
                            </div>
                        </div>


                        {/* Modal Button */}
                        <div className="my-10 mx-8 flex justify-center">
                            <button
                                type="button"
                                onClick={() => document.getElementById('my_modal_1').showModal()}
                                className="px-8 py-3 text-lg font-semibold border border-[#0077b6] rounded-lg flex items-center gap-2"
                            >
                                Add to the playlist <IoIosAddCircleOutline className="text-3xl" />
                            </button>
                        </div>

                        {/* Playlist Podcasts */}
                        {playlist?.podcasts?.map((podcast, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 mx-4 sm:mx-8 lg:mx-12 border rounded-xl my-4">
                                <Image
                                    src={podcast.imgUrl || '/path/to/fallback.jpg'}
                                    alt={podcast.title}
                                    width={80}
                                    height={80}
                                    className="object-cover rounded-lg"
                                />
                                <div>

                                    <h4 className="text-lg font-bold ">{podcast.title}</h4>
                                    <p className="text-sm ">{podcast.date}</p>
                                    <p className="">{podcast.description?.slice(0, 50)}...</p>

                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="flex justify-center items-center h-screen">
                        <CirclesWithBar height={80} width={80} color="#0077b6" />
                    </div>
                )}
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
                                <div
                                    key={podcast._id}
                                    className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-100 rounded-lg transition duration-200 ease-in-out"
                                >
                                    <Image
                                        src={podcast?.imgUrl || '/path/to/fallback.jpg'} // Fallback image
                                        alt={podcast.title}
                                        width={80}
                                        height={80}
                                        className="object-cover rounded-lg max-w-20 max-h-12"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold truncate">{podcast.title}</h3>
                                        <p className="text-sm text-gray-400">{podcast.date}</p>
                                        <p className="truncate">
                                            {podcast.description?.split(" ").slice(0, 10).join(" ")}
                                            {podcast.description?.split(" ").length > 10 && " ..."}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleAddToPlaylist(podcast)}

                                        className="text-2xl hover:text-blue-500 transition duration-200"

                                        aria-label="Add to Playlist"
                                    >
                                        <IoIosAddCircleOutline />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No podcasts available</p>
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