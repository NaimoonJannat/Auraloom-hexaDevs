"use client"
import React from 'react';

const MyPodcasts = ({ podcasts }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">My Podcasts</h2>

            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Podcast Name</th>
                        <th className="px-4 py-2">Creator</th>
                        <th className="px-4 py-2">Likes</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {podcasts.map((podcast, index) => (
                        <tr key={podcast.id} className="bg-gray-100">
                            <td className="border px-4 py-2 text-center">{index + 1}</td>
                            <td className="border px-4 py-2">{podcast.title}</td>
                            <td className="border px-4 py-2">{podcast.creator}</td>
                            <td className="border px-4 py-2 text-center">{podcast.likes}</td>
                            <td className="border px-4 py-2 text-center">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyPodcasts;
