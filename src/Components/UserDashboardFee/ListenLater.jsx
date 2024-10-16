"use client"
import React, { useEffect, useState } from 'react';
import DashboardHeading from '../Heading/DashboardHeading';
import Image from 'next/image';

const ListenLater = () => {
    const [listenLater, setListenLater] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://auraloom-backend.vercel.app/podcasts');
                const result = await response.json();
                setListenLater(result.podcasts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
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
                                src={later.imgUrl}
                                alt={later.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-xl text-gray-400 font-semibold">{later.title}</h3>
                            <p className="text-gray-400">{later.creator}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListenLater;