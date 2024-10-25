"use client";
import React, { useEffect, useState } from 'react';
import DashboardHeading from '../Heading/DashboardHeading';
import Image from 'next/image';
import Link from 'next/link';

const ListenLater = () => {
    const [listenLater, setListenLater] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://auraloom-backend.vercel.app/podcasts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);
                if (result && Array.isArray(result)) {
                    setListenLater(result);
                }
            } catch (error) {
                setError("Failed to fetch podcasts.");
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    const limitedPodcasts = listenLater.filter((_, index) => index < 4);
    console.log(limitedPodcasts);

    return (
        <div className='container mx-auto'>
            <DashboardHeading className="bg-black" title={"Listen Later"} />

            {limitedPodcasts.length === 0 ? (
                <p className="text-center">No podcasts available to listen later.</p>
            ) : (
                <div className="listenLater-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {limitedPodcasts.map((later) => (
                        <div key={later._id} className="later-card bg-gray-800 p-4 rounded-lg">
                            <div className="relative w-full h-40">
                                <Image
                                    src={later.imgUrl}
                                    alt={later.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="rounded-lg z-10"
                                />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-xl text-gray-400 font-semibold">{later.title}</h3>
                                <p className="text-gray-400">{later.creator}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center mt-6 lg:mt-10">
                <Link href={'/podcast'}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md">
                    Want to explore more! 👉
                </Link>
            </div>
        </div>
    );
};

export default ListenLater;
