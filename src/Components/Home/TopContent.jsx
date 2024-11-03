'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";

const TopContent = () => {
    const [podcasts, setPodcasts] = useState([]);

    // Fetch podcasts data from API
    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await axios.get("https://auraloom-backend.vercel.app/podcasts");

                // Sort podcasts by likes count in descending order and take the top 4
                const sortedPodcasts = response.data
                    .sort((a, b) => b.likes.length - a.likes.length)
                    .slice(0, 4);

                setPodcasts(sortedPodcasts);
            } catch (error) {
                console.error("Error fetching podcasts:", error);
            }
        };
        fetchPodcasts();
    }, []);

    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75 mt-6"
                ></div>
                <span className="relative z-10 px-6 text-2xl text-[#0077b6] font-montserrat">Top Content</span>
            </span>

            {/* CARD */}
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        {podcasts.map((podcast, index) => (
                            <div key={index} className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CAF0F8] transition-colors duration-200 shadow-lg hover:shadow-2xl max-w-96">
                                <a href={podcast.link} className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                    <Image
                                        src={podcast?.imgUrl} // Ensure this is an absolute URL or configure the domain in next.config.js
                                        alt={podcast.title}
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        width={400}
                                        height={600}
                                    />
                                    <div className="relative flex justify-end pt-2">
                                        <h2 className="btn bg-gray-200 text-lg scale-75 rounded-full text-black dark:text-gray-800 hover:bg-[#00B4D8] hover:text-white transition-colors">
                                            <IoHeadsetOutline className='text-xl' /> {podcast.category}
                                        </h2>
                                    </div>
                                </a>

                                <div className="flex flex-1 flex-col p-4 sm:p-6">
                                    <span className="text-sm text-gray-500 font-medium mb-1">{podcast.date}</span>
                                    <h2 className="mb-2 text-lg font-semibold">
                                        <a href={podcast.link} className="transition duration-100 hover:text-[#00B4D8] active:text-[#0077B6] text-xl font-bold truncate">{podcast.title}</a>
                                    </h2>
                                    <hr className="border-gray-300 dark:border-gray-600" />
                                    <p className="truncate mb-8 mt-2 text-gray-500 font-semibold">
                                        {podcast.description?.split(" ").slice(0, 5).join(" ")}
                                        {podcast.description?.split(" ").length > 5 && " ..."}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <span className="block text-[#0077B6] font-semibold">Hosted By:</span>
                                                <span className="block text-sm text-gray-400 font-medium">{podcast.creator}</span>
                                            </div>
                                        </div>
                                        <span className="btn rounded-full border text-sm text-gray-500 hover:bg-[#0077B6] hover:text-white dark:hover:bg-[#00B4D8] transition-colors">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopContent;
