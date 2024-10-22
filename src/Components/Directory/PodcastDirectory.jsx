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
    const [page, setPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total number of pages
    const limit = 9; // Number of podcasts per page

    // Searching
    const searchParams = useSearchParams(); // Use Next.js hook to get query params from URL
    const initialSearchQuery = searchParams.get("search") || ""; // Get the 'search' query from the URL
    const [searchInput, setSearchInput] = useState(""); // State for the input field (controlled component)
    const router = useRouter(); // For navigation

    // Fetch total number of podcasts separately
    const fetchTotalPodcasts = async (searchQuery) => {
        try {
            // Build the URL for the total count API
            let url = `https://auraloom-backend.vercel.app/podcasts/count`;
            if (searchQuery) {
                url += `?search=${encodeURIComponent(searchQuery)}`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch total podcast count");
            }

            const data = await response.json();
            return data.totalPodcasts;
        } catch (error) {
            console.error("Error fetching total podcast count:", error);
            return 0;
        }
    };

    // Fetch podcasts when the page or the search query changes
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            // Fetch the total number of podcasts first
            const totalPodcasts = await fetchTotalPodcasts(initialSearchQuery);
            setTotalPages(Math.ceil(totalPodcasts / limit)); // Calculate total number of pages

            // Build the URL for the API request, including search and pagination parameters
            let url = `https://auraloom-backend.vercel.app/podcasts?page=${page}&limit=${limit}`;
            if (initialSearchQuery) {
                url += `&search=${encodeURIComponent(initialSearchQuery)}`;
            }

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setPodcasts(data); // Set the podcasts directly as an array

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page, initialSearchQuery]); // Re-fetch data whenever page or search query changes

    // Handle search submission (only triggered when user hits "Enter" or clicks search icon)
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page

        if (searchInput.trim()) {
            // Redirect to the current page with the search query as a URL parameter
            router.push(`/podcast?search=${encodeURIComponent(searchInput)}`);
        }
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

    // If the data is still loading, show a loading message
    if (isLoading) {
        return <div className="flex justify-center items-center lg:mt-20">
            <CirclesWithBar
                height="100"
                width="100"
                color="#4F46E5"
                outerCircleColor="#4F46E5"
                innerCircleColor="#4F46E5"
                barColor="#4F46E5"
                ariaLabel="circles-with-bar-loading"
                visible={true}
                
                />;
        </div>
    }
    

    // If there are no podcasts available or the API failed to return valid data
    if (!podcasts || !podcasts.length) {
        return <div>No podcasts available at the moment.</div>;
    }

    return (
        <div>
            <SectionTitle title={"Podcast Directory"}></SectionTitle>
            {/* Search Bar */}
            <form className="input input-bordered flex w-fit mx-auto items-center gap-2" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className="w-fit"
                    placeholder="Search Podcasts..."
                    value={searchInput} // Bind the input value to state
                    onChange={(e) => setSearchInput(e.target.value)} // Update search input on typing
                />
                <button type="submit">
                    <IoIosSearch />
                </button>
            </form>

            <div className="mx-auto md:w-5/6 lg:w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 mx-14 lg:px-10 text-white">
                    {podcasts.map((podcast) => (
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
                            className={`text-white text-xs  md:text-sm p-2 lg:p-3 rounded-xl font-normal mx-1 ${
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
