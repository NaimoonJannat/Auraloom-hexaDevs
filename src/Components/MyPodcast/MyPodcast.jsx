"use client"
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
const MyPodcasts = () => {
    const { user } = useContext(AuthContext);
    const [item,setItem] = useState([])
    useEffect(() => {
        const getData =  async() =>
         {
            const {data} = await axios(`https://auraloom-backend.vercel.app/podcasts/${user?.email}`)
            setItem(data)
         }
         getData()
    }, [])
    return (
        <div className="p-6 rounded-lg shadow-md">
            <h3 className='text-[#03045e] font-montserrat font-medium text-center lg:text-3xl text-xl'>My Added Podcasts</h3>
            {item.length === 0 ? (
                <p className="text-center text-gray-600">No podcasts found. You haven&apos;t added any podcasts yet.</p>
            ) : (
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">No.</th>
                            <th className="px-4 py-2">Podcast Name</th>
                            <th className="px-4 py-2">Creator</th>
                            <th className="px-4 py-2">Likes</th>
                            <th className="px-4 py-2">DisLikes</th>
                            <th className="px-4 py-2">Comments</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((podcast, index) => (
                            <motion.tr
                                key={podcast._id}
                                className="bg-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2">{podcast.title}</td>
                                <td className="border px-4 py-2">{podcast.creator}</td>
                                <td className="border px-4 py-2 text-center">{podcast.likes.length}</td>
                                <td className="border px-4 py-2 text-center">{podcast.dislikes.length}</td>
                                <td className="border px-4 py-2 text-center">{podcast.comments.length}</td>
                                <td className="border px-4 py-2 text-center">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2">
                                        Update
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                                        Delete
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyPodcasts;
