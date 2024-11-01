"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoHeadsetOutline } from "react-icons/io5";
import axios from "axios";

const TrendingPodcasts = () => {
    const [podcasts, setPodcasts] = useState([]);
    const containerRef = useRef(null);

    // Fetch podcasts data from API
    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await axios.get("https://auraloom-backend.vercel.app/podcasts");
                setPodcasts(response.data);
            } catch (error) {
                console.error("Error fetching podcasts:", error);
            }
        };
        fetchPodcasts();
    }, []);

    // Automatic scrolling effect
    const scrollCards = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 2;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollCards, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='my-10 md:my-14 lg:my-20'>
            <div className="">
                <span className="relative flex justify-center mt-20 mb-5 font-bold">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75 mt-6"></div>
                    <span className="relative z-10 px-6 text-2xl text-[#0077b6] font-montserrat">Trending Podcasts</span>
                </span>
                <p className="mt-4 text-center mb-8 dark:text-sky-950">
                    Discover top podcasts from various categories, hosted by industry experts.
                </p>
            </div>
            <div className="overflow-hidden relative">
                <div className="flex gap-5" ref={containerRef} style={{ minHeight: '100%', whiteSpace: 'nowrap', overflowX: 'hidden' }}>
                    {podcasts.map((podcast) => (
                        <motion.div
                            key={podcast.id}
                            className="inline-block border-2 rounded-lg w-full max-w-sm mx-auto my-4"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.03 }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className='border rounded-xl hover:border-[#0077b6] gap-6'>
                                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 p-4">
                                    <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                        <Image
                                            src={podcast.imgUrl}
                                            alt={podcast.podcastName}
                                            className="absolute h-full w-full object-cover object-center"
                                            width={300}
                                            height={300}
                                        />
                                    </a>

                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm text-gray-500 font-medium">{podcast.uploadedDate}</span>

                                        <h2 className="text-lg font-bold overflow-hidden w-32">
                                            <a href="/podcast" className="hover:text-[#00b4d8] active:text-[#0077b6] overflow-hidden w-32">
                                                {podcast.title}
                                            </a>
                                        </h2>
                                        <hr />
                                        <p className="text-gray-500 overflow-hidden w-32">{podcast.description}</p>

                                        <div>
                                            <a href="/podcast" className="font-semibold text-[#00b4d8] hover:text-[#0077b6] active:text-indigo-700">
                                                Listen Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center py-2'>
                                    <div className='flex gap-4 px-4 items-center'>
                                        <IoHeadsetOutline className='text-xl' />
                                        <button className='btn btn-xs border border-black rounded-md'>{podcast.category}</button>
                                    </div>
                                    <div className='flex items-center px-4  overflow-hidden'>
                                        <h2>Hosted by {podcast.creator}</h2>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingPodcasts;
