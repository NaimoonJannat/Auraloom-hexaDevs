"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart, FaPlayCircle, FaRegHeart } from 'react-icons/fa';
import StreamingNow from '../StrimingNow/StrimingNow';

const MainContent = () => {
    // Placeholder static playlist data
    const playlists = [
        { id: 1, name: 'Mindful Conversations', creator: 'Emer', },
        { id: 2, name: 'Tech Insights', creator: 'Emer', },
        { id: 3, name: 'History Uncovered', creator: 'Emer', },
        { id: 4, name: 'Health and Wellness', creator: 'Emer', },
    ];

    // Static data for activities
    const activities = {
        listened: [
            { id: 1, name: 'Mindful Conversations', date: '2024-09-15' },
            { id: 2, name: 'Tech Insights', date: '2024-09-20' },
        ],
        liked: [
            { id: 1, name: 'Health and Wellness', date: '2024-09-18' },
            { id: 2, name: 'Mindful Conversations', date: '2024-09-15' },
        ],
        unliked: [
            { id: 1, name: 'History Uncovered', date: '2024-09-25' },
        ],
    };

    return (
        <div className="flex-grow p-6">
            <div className="mb-6">

                {/* Streming now */}
                {/* <StreamingNow></StreamingNow> */}
                {/* <div>
                    <h1 className="text-3xl font-bold mb-2">Streaming Now</h1>
                </div> */}

                {/* Playlist */}
                <div className="flex justify-between space-x-6">
                    <div className="max-w-sm min-h-full w-full h-auto rounded my-auto overflow-hidden shadow-lg flex flex-col justify-between">
                        <Image height={130} width={130} className="w-full" src="https://i.ibb.co.com/4dbXrR1/1a33dd2cba4557349d254e99143962e5.jpg" alt="Sunset in the mountains"></Image>
                        <div className="px-6 py-4">
                            <Link href={'/dashboard#'} className="font-bold text-xl mb-2 hover:bg-sky-700 text-sky-700 hover:text-white px-6 py-3 hover:rounded-md w-full">Create A New Play List</Link>
                        </div>
                    </div>

                    <div className="min-h-full w-full p-6 bg-white shadow-lg rounded-lg">
                        <h1 className="text-3xl font-bold mb-4 text-blue-950">Your Playlists</h1>
                        <table className="min-w-full bg-white shadow-lg rounded-lg">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 text-left text-sm uppercase font-medium">
                                    <th className="py-3 px-6">#</th>
                                    <th className="py-3 px-6">Podcast Name</th>
                                    <th className="py-3 px-6">Creator Name</th>
                                    <th className="py-3 px-6">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {playlists.map((playlist, index) => (
                                    <tr key={playlist.id} className="border-b">
                                        <td className="py-3 px-6">{index + 1}</td>
                                        <td className="py-3 px-6">{playlist.name}</td>
                                        <td className="py-3 px-6">{playlist.creator}</td>
                                        <td className="py-3 px-6">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>



            <div>
                {/* <h2 className="text-2xl font-bold mb-2">Listening History</h2> */}

                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6 text-blue-950">Your Activities</h1>

                    {/* Listened Podcasts Section */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Podcasts Listened</h2>
                        <ul>
                            {activities.listened.map((podcast) => (
                                <li key={podcast.id} className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-lg mb-2">
                                    <div className="flex items-center">
                                        <FaPlayCircle className="text-blue-500 text-lg mr-2" />
                                        <span className="font-medium">{podcast.name}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{podcast.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Liked Podcasts Section */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Liked Podcasts</h2>
                        <ul>
                            {activities.liked.map((podcast) => (
                                <li key={podcast.id} className="flex items-center justify-between py-2 px-4 bg-green-100 rounded-lg mb-2">
                                    <div className="flex items-center">
                                        <FaHeart className="text-red-500 text-lg mr-2" />
                                        <span className="font-medium">{podcast.name}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{podcast.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Unliked Podcasts Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Unliked Podcasts</h2>
                        <ul>
                            {activities.unliked.map((podcast) => (
                                <li key={podcast.id} className="flex items-center justify-between py-2 px-4 bg-red-100 rounded-lg mb-2">
                                    <div className="flex items-center">
                                        <FaRegHeart className="text-gray-500 text-lg mr-2" />
                                        <span className="font-medium">{podcast.name}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{podcast.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
