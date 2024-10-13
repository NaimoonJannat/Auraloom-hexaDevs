"use client";

import SectionTitle from "@/Components/Heading/SectionTitle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";

const PodcastDirectory = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total number of pages
    const limit = 9; // Number of podcasts per page

    useEffect(() => {
        const fetchData = async () => {
            // Clear the podcasts before fetching new data to avoid duplicates
            setPodcasts([]);
            setIsLoading(true);

            try {
                const response = await fetch(`http://localhost:5000/podcasts?page=${page}&limit=${limit}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();

                // Ensure podcasts is defined and an array
                if (data && data.podcasts) {
                    setPodcasts(data.podcasts);
                    setTotalPages(Math.ceil(data.totalPodcasts / limit)); // Calculate total number of pages
                } else {
                    setPodcasts([]); // Default to empty array if data is invalid
                }

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handlePageJump = (pageNumber) => {
        setPage(pageNumber);
    };

    // If the data is still loading, show a loading message
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If there are no podcasts available or the API failed to return valid data
    if (!podcasts || !podcasts.length) {
        return <div>No podcasts available at the moment.</div>;
    }

    return (
        <div>
            <SectionTitle title={"Podcast Directory"}></SectionTitle>
            <label className="input input-bordered flex w-fit mx-auto items-center gap-2">
                <input type="text" className="w-fit" placeholder="Search" />
                <IoIosSearch />
            </label>

            <div className="mx-auto md:w-5/6 lg:w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 mx-14 lg:px-10 text-white">
                    {podcasts.map(podcast => (
                        <Link key={podcast._id} podcast={podcast} href={`/podcast/${podcast._id}`}>
                            <div className="relative rounded-lg overflow-hidden shadow-lg w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${podcast.imgUrl})` }}
                                >
                                    <div className="bg-black bg-opacity-30 h-full w-full"></div>
                                </div>

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex flex-col justify-between h-full p-3 md:p-4">
                                    <div className="text-white text-sm mb-2">
                                        <span>{podcast.category}</span>
                                    </div>
                                    <div className="flex gap-2 md:gap-4 lg:gap-6 items-center mt-auto">
                                        <IoPlayCircle className="text-3xl md:text-5xl lg:text-6xl text-white" />
                                        <span className="lg:text-xl md:text-base text-sm font-bold text-white w-10/12 md:w-11/12 lg:w-3/4">
                                            {podcast.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="bg-[#03045E] text-white text-xs md:text-sm p-2 lg:p-3 rounded-lg font-normal mx-2 md:mx-3"
                    >
                        Previous
                    </button>

                    {/* Dynamic Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageJump(index + 1)}
                            className={`text-white text-xs  md:text-sm p-2 lg:p-3 rounded-xl font-normal mx-1 ${page === index + 1 ? 'bg-[#2e8cea]' : 'bg-[#79bcff]'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="bg-[#03045E] text-xs md:text-sm p-2 lg:p-3 text-white rounded-lg font-normal mx-2 md:mx-3"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PodcastDirectory;
