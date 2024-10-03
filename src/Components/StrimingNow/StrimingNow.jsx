import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const podcastData = {
    title: "Pain",
    creator: "Ryan Jones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque, cras et sollicitudin vitae etiam sagittis.",
    imageUrl: "https://i.ibb.co.com/pxpRbn3/images-3.jpg",
};

const StreamingNow = () => {
    const [isHovered, setIsHovered] = useState(false);

    const borderClass = isHovered ? 'border-pulse' : '';

    return (
        <div className="streaming-now flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Streaming Now</h2>

            <div
                className={`relative border-4 ${borderClass} rounded-full w-56 h-56 mb-4`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    height={50}
                    width={50}
                    src={podcastData.imageUrl}
                    alt={podcastData.title}
                    className="w-full h-full object-cover rounded-full"
                />

                <button className="absolute inset-0 flex items-center justify-center text-white">
                    <FaPlayCircle className="text-6xl text-red-500" />
                </button>
            </div>

            <h3 className="text-2xl text-white font-bold mb-2">{podcastData.title}</h3>
            <p className="text-md text-gray-400 mb-4">by {podcastData.creator}</p>

            <p className="text-sm text-gray-500 text-center">{podcastData.description}</p>
        </div>
    );
};

export default StreamingNow;
