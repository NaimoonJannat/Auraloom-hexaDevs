"use client";

import SectionTitle from "@/Components/Heading/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";

const PodcastDirectory = () => {
    
    const [podcasts, setPodcasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("Fetching data...");
                const response = await fetch('http://localhost:5000/podcasts'); 

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                // console.log("Data fetched:", data);  // Debug: Log the fetched data to ensure it's coming through

                setPodcasts(data);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // If the data is still loading, show a loading message
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If there are no podcasts available, display a message
    if (!podcasts.length) {
        return <div>No podcasts available at the moment.</div>;
    }


    return (
        <div>
        <SectionTitle title={"Podcast Directory"}></SectionTitle>
        <label className="input input-bordered flex w-fit mx-auto  items-center gap-2">
            <input type="text" className="w-fit" placeholder="Search" />
            <IoIosSearch />
        </label>

        <div className="w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 px-10 text-white">
        {
            podcasts.map(podcast => (
                <Link key={podcast._id} podcast={podcast}  href={`/podcast/${podcast._id}`}>
                {/* <div className="lg:px-8 lg:py-8 rounded-xl shadow-xl bg-cover bg-center min-h-96 min-w-96"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${podcast.imgUrl})`,
                    }}> */}
                

                {/* DETAILS */}
                <div className="relative rounded-lg overflow-hidden shadow-lg w-96 h-96">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${podcast.imgUrl})` }}
                    >
                        {/* Overlay */}
                        <div className="bg-black bg-opacity-30 h-full w-full"></div>
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-4">
                        {/* Episode Info */}
                        <div className="text-white text-sm mb-2">
                        <span className="font-semibold">{podcast.date}</span> <span>EPISODE {podcast.episode}</span>
                        </div>

                        {/* Podcast Title */}
                        <div className="flex gap-6 items-center mt-auto"> {/* Add mt-auto to push it down */}
                        <IoPlayCircle className="text-6xl md:text-7xl  text-white" />
                        <span className="lg:text-2xl md:text-xl text-lg font-bold text-white w-3/4">
                            {podcast.title}
                        </span>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div className="flex gap-6 items-center">
                        <IoPlayCircleOutline  className="text-6xl  "/>
                        <span className="w-2/3 lg:text-2xl md:text-xl text-lg font-bold">{podcast.title}</span>
                    </div>
                </div> */}
                {/* </div> */}
                </Link>
            ))
        }           

        </div>

    </div>
        </div>
    );
};

export default PodcastDirectory;