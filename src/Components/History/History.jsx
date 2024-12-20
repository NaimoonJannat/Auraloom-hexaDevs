'use client';
import Image from 'next/image';
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';

const History = () => {
    const { user } = useContext(AuthContext);
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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

    if (loading) return <Loader />;

    return (
        <div>
            <span className="relative flex justify-center my-10 font-bold">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-90 mt-6"></div>
                <span className="relative z-10 px-6 text-2xl text-[#0077b6]">History</span>
            </span>

            {historyData.length === 0 ? (
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-lg">No listening history yet. Explore and find your favorite podcasts!</p>
                    <button 
                        onClick={() => router.push('/directory')}
                        className="mt-4 px-6 py-2 bg-[#00B4D8] text-white rounded hover:bg-[#0077B6] transition duration-200"
                    >
                        Go to Directory
                    </button>
                </div>
            ) : (
                <div className="mx-auto max-w-screen-xl px-4 my-4 md:px-8">
                    {historyData.map((item) => (
                        <div key={item._id} className="flex flex-col items-center md:items-start gap-4 md:flex-row lg:gap-6 mb-8 w-full">
                            <a href={`/podcast/${item._id}`} className="group relative block h-56 w-full md:w-1/4 overflow-hidden rounded-lg bg-gray-100 shadow-lg transition duration-200 hover:shadow-2xl">
                                <Image
                                    src={item.imgUrl}
                                    alt={item.title}
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex flex-col gap-2 w-full md:w-3/4">
                                <span className="text-sm text-gray-500 font-medium"></span>
                                <h2 className="text-xl font-bold hover:text-black">
                                    <a href={`/podcast/${item._id}`} className="transition duration-100 hover:text-[#00B4D8]">
                                        {item.title}
                                    </a>
                                </h2>
                                <h2 className='text-sm font-semibold'>by {item.creator}</h2>
                                <p className="text-gray-500">{item.description}</p>
                                <div>
                                    <a 
                                        href={`/podcast/${item._id}`} 
                                        className="font-semibold text-[#00B4D8] transition duration-100 hover:text-[#0077B6]"
                                    >
                                        Listen Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
