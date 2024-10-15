"use client"
import React, { useEffect, useState } from 'react';
import DashboardHeading from '../Heading/DashboardHeading';
import Image from 'next/image';

const ListenLater = () => {
    const [listenLater, setlistenLater] = useState([]);

    // Fetch playlist data (you can replace this with actual API call)
    useEffect(() => {
        const fetchData = async () => {
            const data = [
                {
                    id: 1,
                    name: "Workout at the gym",
                    duration: "2h 15m",
                    image: "https://i.ibb.co.com/HFvZp6g/36b51ec659040cb5ef1d6e8780cb1ff4.jpg",
                },
                {
                    id: 2,
                    name: "Tracks without lyrics",
                    duration: "2h 15m",
                    image: "https://i.ibb.co.com/TYW5Xd5/ea596c912c4c0452b24219ab9d9b68ef.jpg",
                },
                {
                    id: 3,
                    name: "Funny stuff",
                    duration: "6h 48m",
                    image: "https://i.ibb.co.com/7rzZYBq/e5b23de9d812e7f39204c43e2ca4eff5.jpg",
                },
                {
                    id: 4,
                    name: "Careful driving vibes",
                    duration: "5h 09m",
                    image: "https://i.ibb.co.com/Sm1pKGz/9140a74714f6efbe6ba6a8de3b410ac7.jpg",
                },
            ];
            setlistenLater(data);
        };

        fetchData();
    }, []);

    return (
        <div className='container mx-auto'>
            {/* <h1>Listen-later Components</h1> */}
            {/* listenLater Section */}
            <div>
                <h1>
                    <DashboardHeading className="bg-black" title={"Listen Later"}></DashboardHeading>
                </h1>
            </div>
            <div className="listenLater-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {listenLater.map((later) => (
                    <div key={later.id} className="later-card bg-gray-800 p-4 rounded-lg">
                        <div className="relative w-full h-40">
                            <Image
                                src={later.image}
                                alt={later.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-xl text-gray-400 font-semibold">{later.name}</h3>
                            <p className="text-gray-400">{later.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListenLater;