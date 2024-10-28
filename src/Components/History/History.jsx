'use client';
import Image from 'next/image';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';


const History = () => {
    const { user } = useContext(AuthContext);
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!user || !user.email) return;

            try {
                // Fetch user data
                const userResponse = await fetch(`https://auraloom-backend.vercel.app/users?email=${user.email}`);
                const userData = await userResponse.json();

                // Get played podcast IDs
                const playedPodcasts = userData[0]?.played?.map(item => item.podcastId) || [];

                if (playedPodcasts.length > 0) {
                    // Fetch podcast data based on played podcast IDs
                    const podcastsResponse = await fetch('https://auraloom-backend.vercel.app/podcasts');
                    const allPodcasts = await podcastsResponse.json();

                    // Filter podcasts by the played podcast IDs
                    const filteredPodcasts = allPodcasts.filter(podcast => playedPodcasts.includes(podcast._id));

                    // Set the filtered podcasts as history data
                    setHistoryData(filteredPodcasts);
                }
            } catch (error) {
                console.error('Error fetching history data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [user]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <span className="relative flex justify-center my-10 font-bold">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-90 mt-6"></div>
                <span className="relative z-10 px-6 text-2xl text-[#0077b6]">History</span>
            </span>

            <div className="mx-auto max-w-screen-xl px-4 my-4 md:px-8">
                {historyData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-90 mb-8">
                        <a href={item.audioUrl} className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg transition duration-200 hover:shadow-2xl md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <Image
                                src={item.imgUrl}
                                alt={item.title}
                                loading="lazy"
                                width={600}
                                height={400}
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 group-hover:bg-[#CAF0F8]"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-500 font-medium">{new Date(item.createdAt).toLocaleDateString()}</span>
                            <h2 className="text-xl font-bold hover:text-black">
                                <a href={item.audioUrl} className="transition duration-100 hover:text-[#00B4D8]">
                                    {item.title}
                                </a>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                            <div>
                                <a href={item.audioUrl} className="font-semibold text-[#00B4D8] transition duration-100 hover:text-[#0077B6]">
                                    Listen Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
