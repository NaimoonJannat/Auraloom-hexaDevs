"use client"
import React, { useContext,  useState } from 'react';
import ReceivableGrowth from './ReceivableGrowth'; // Import the ReceivableGrowth component
import Image from 'next/image';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import MyPodcasts from '../MyPodcast/MyPodcast';
import Link from 'next/link';
import { ChartBarIcon, HeartIcon, MusicNoteIcon, SelectorIcon } from '@heroicons/react/outline';
import { FcIdea } from 'react-icons/fc';
import { MdGeneratingTokens } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { FaChartBar, FaMusic } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import creatordashboardanimation from '../../../public/creatordashboard.json';
import studio from '../../../public/studio.jpg'

import AddPodcast from '../add-podcast/AddPodcast';

const CreatorDashboard = () => {
    const { user, logout } = useContext(AuthContext);
    
    console.log(user);
    const signOutUser = () => {
        logout()
            .then(() => { })
            .catch(() => { });
    };
   
 

   
    return (
        <div className="min-h-screen  flex">
            {/* Sidebar */}
            <aside className="w-64  p-6 h-screen sticky top-0  overflow-y-auto shadow-lg">
                <div>
                    <div>
                        {/* Avatar dropdown */}
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar hover:scale-105 transform transition"
                            >
                                <div className="w-10 h-10 rounded-full border-2 border-sky-500 p-1">
                                    <Image
                                        src={user?.photoURL}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                        alt="User avatar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Display user's name */}
                    <div>
                        <button className=" font-semibold text-sm hover:text-blue-400 transition">
                            {user?.displayName || 'user'}
                        </button>
                    </div>
                </div>
                <nav className="mt-10">
                    <ul className="space-y-2">
                        <Link href={"/my-podcast"} className="flex items-center space-x-2 mb-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <FaMusic className="h-5 w-5 " />
                            <span>My Podcast</span>
                        </Link>
                        <Link href={"/receivable-growth"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <FaChartBar className="h-6 w-6 " />
                            <span>Analytics</span>
                        </Link>
                        <Link href={"/Settings"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <CiSettings className="h-6 w-6 " />
                            <span>Settings</span>
                        </Link>
                        <Link href={"/generate-thumbnail"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <MdGeneratingTokens className="h-6 w-6 " />
                            <span>Get Thumbnail</span>
                        </Link>
                        <Link href={"/idea-generate"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <FcIdea className="h-6 w-6 " />
                            <span>Idea Generate</span>
                        </Link>
                        <li>
                            <a href="/" className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                                <span className="text-sm font-medium">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            {/* Main content */}
            <main className="flex-1 p-10 ">
                <div
                    className="hero min-h-72"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/mTGcYZK/57a26592612e2081a0db8b71f07af624.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className=" text-5xl font-bold"></h1>
                            <h1 className="m-5 text-xl lg:text-2xl font-bold font-montserrat text-white capitalize  dark:text-white">
                                <Typewriter
                                    words={[
                                        `Hello ${user?.displayName || 'Guest'}`,
                                        'your story starts here!',
                                        'Share your voice with the world'
                                    ]}
                                    loop={20}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                           
                        </div>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 gap-4 items-center bg-cover bg-center rounded-lg"
                >
                    <div className='w-full col-span-1'><AddPodcast /></div>
                    <motion.div
                        className="p-4 bg-green-100 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.h2
                            className="text-lg font-montserrat font-semibold text-[#03045e] text-center"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            Generate Thumbnail
                        </motion.h2>

                        <p className='text-center font-medium text-gray-700 font-montserrat'>
                            Create custom thumbnails to make your podcast stand out and attract more listeners.
                        </p>

                        {/* Lottie Animation */}
                        <div className="flex justify-center items-center mt-4">
                            <Lottie
                                animationData={creatordashboardanimation}
                                loop={true}
                                className="w-32 h-32"
                            />
                        </div>
                        <Link href={'/generate-thumbnail'}>
                            <motion.button
                                className="btn bg-blue-500 text-white border-none mt-4 px-4 py-2 rounded-lg flex mx-auto justify-center items-center"
                                whileHover={{ scale: 1.1, backgroundColor: '#2563eb' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Generate Thumbnail
                            </motion.button>
                        </Link>
                    </motion.div>
                    <motion.div className='m-4'
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, ease: 'easeOut' }}
                     whileHover={{ scale: 1.05 }}
                    >
                    <MyPodcasts/>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default CreatorDashboard;
