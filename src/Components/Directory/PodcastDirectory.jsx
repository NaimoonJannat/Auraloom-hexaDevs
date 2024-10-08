"use client";

import SectionTitle from "@/Components/Heading/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const PodcastDirectory = () => {
    
    const [podcasts, setPodcasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("Fetching data...");
                const response = await fetch('/podcasts.json'); 

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
        <div>
        <SectionTitle title={"Podcast Directory"}></SectionTitle>
        <label className="input input-bordered flex w-fit mx-auto  items-center gap-2">
                    <input type="text" className="w-fit" placeholder="Search" />
                    <IoIosSearch />
                </label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 px-10">
        {
            podcasts.map(podcast => (
                <Link key={podcast._id}  href={`/detail`}>
                <div className="lg:px-8 lg:py-8 bg-[#CAF0F8] text-lg rounded-xl shadow-xl">
                <figure>
                    <Image
                    className="mx-auto w-full rounded-xl"
                    src={podcast.imgUrl}
                    alt="Podcast cover"
                    width={600}  // Specify an appropriate width based on your design
                    height={400} // Specify an appropriate height based on the aspect ratio
                    />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-lg lg:text-xl text-center mb-3">{podcast.title}</h2>
                    <p className="text-base md:text-lg lg:text-xl">
                    <span className="font-bold">Artist:</span> {podcast.creator}
                    </p>
                    <p className="text-base md:text-lg lg:text-xl">
                    <span className="font-bold">Played:</span> {podcast.plays}
                    </p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
                </div>
                </Link>
            ))
        }           

        </div>

    </div>
        </div>
    );
};

export default PodcastDirectory;