"use client";

import SectionTitle from "@/Components/Heading/SectionTitle";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import { CirclesWithBar } from 'react-loader-spinner';

const PodcastDirectory = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Pagination
    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);
    const limit = 8;

    // Searching
    const searchParams = useSearchParams();
    const initialSearchQuery = searchParams.get("search") || ""; 
    const [searchInput, setSearchInput] = useState(initialSearchQuery); 
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const router = useRouter();

    // Sync the searchInput state with the URL only when the URL changes
    useEffect(() => {
        setSearchInput(initialSearchQuery);
        setSearchQuery(initialSearchQuery);
    }, [initialSearchQuery]);

    // Fetch podcasts when the page or the search query changes
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            // Fetch the total number of podcasts first
            const totalPodcasts = await fetchTotalPodcasts(searchQuery);
            if (totalPodcasts > 0) {
                setTotalPages(Math.ceil(totalPodcasts / limit)); 
            } else {
                setTotalPages(1);
            }

            // Build the URL for fetching paginated podcasts
            let url = `https://auraloom-backend.vercel.app/podcasts-pagination?page=${page}&limit=${limit}`;
            if (searchQuery) {
                url += `&search=${encodeURIComponent(searchQuery)}`;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setPodcasts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page, searchQuery]);

    // Fetch the total number of podcasts based on the search query
    const fetchTotalPodcasts = async (query) => {
        try {
            let url = 'https://auraloom-backend.vercel.app/podcasts-pagination/count';
            if (query) {
                url += `?search=${encodeURIComponent(query)}`;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch total podcast count");
            }

            const data = await response.json();
            if (data && typeof data.totalPodcasts === 'number') {
                return data.totalPodcasts;
            } else {
                console.error('Invalid data format:', data);
                return 0;
            }
        } catch (error) {
            console.error("Error fetching total podcast count:", error);
            return 0;
        }
    };

    // Handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(searchInput.trim());
        setPage(1); 
        router.push(`/podcast?search=${encodeURIComponent(searchInput.trim())}`);
    };

    // Reset to show all podcasts when navigating back to directory
    const resetToDirectory = () => {
        setSearchQuery("");
        setSearchInput("");
        setPage(1);
        router.push("/podcast");
    };

    // Pagination Controls
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

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center lg:mt-20">
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4F46E5"
                    outerCircleColor="#4F46E5"
                    innerCircleColor="#4F46E5"
                    barColor="#4F46E5"
                    ariaLabel="circles-with-bar-loading"
                    visible={true}
                />
            </div>
        );
    }

    // No podcasts available
    if (!podcasts || !podcasts.length) {
        return <div>No podcasts available at the moment.</div>;
    }

    return (
        <div>
            <SectionTitle title={"Podcast Directory"} />
            {/* Search Bar */}
            <form className="input input-bordered flex w-fit mx-auto items-center gap-2" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className="w-fit"
                    placeholder="Search Podcasts..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit">
                    <IoIosSearch />
                </button>
            </form>

            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 mt-16 mx-14 lg:px-10 text-white">
                    {podcasts.map((podcast) => (
                        <Link key={podcast._id} href={`/podcast/${podcast._id}`}>
                            <div className="relative rounded-lg overflow-hidden shadow-lg w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${podcast.imgUrl})` }}
                                >
                                    <div className="bg-black bg-opacity-30 h-full w-full"></div>
                                </div>
                                <div className="relative z-10 flex flex-col justify-between h-full p-3 md:p-4">
                                    <div className="text-white text-sm md:text-base mb-2">
                                        <span>{podcast.category}</span>
                                    </div>
                                    <div className="flex gap-2 md:gap-4 lg:gap-6 items-center mt-auto">
                                        <IoPlayCircle className="text-3xl md:text-5xl lg:text-6xl text-white" />
                                        <span className="lg:text-lg md:text-base text-sm font-bold text-white w-10/12 md:w-11/12 lg:w-3/4">
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

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageJump(index + 1)}
                            className={`text-white text-xs md:text-sm p-2 lg:p-3 rounded-xl font-normal mx-1 ${
                                page === index + 1 ? 'bg-[#2e8cea]' : 'bg-[#79bcff]'
                            }`}
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
