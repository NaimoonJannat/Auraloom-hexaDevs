"use client"
import React, { useContext, useState } from 'react';
import ReceivableGrowth from './ReceivableGrowth'; // Import the ReceivableGrowth component
import Image from 'next/image';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import MyPodcasts from '../MyPodcast/MyPodcast';
import Link from 'next/link';
import { ChartBarIcon, HeartIcon, MicrophoneIcon, MusicNoteIcon, SelectorIcon } from '@heroicons/react/outline';
import { FcIdea, FaHome } from 'react-icons/fc';
import { MdGeneratingTokens } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { FaChartBar, FaMusic } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import creatordashboardanimation from '../../../public/creatordashboard.json';
import studio from '../../../public/studio.jpg'
import AddPodcast from '../add-podcast/AddPodcast';
import { IoMdArrowBack } from 'react-icons/io';
import { BookOpenIcon, HomeIcon } from 'lucide-react';
const CreatorDashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    console.log(user);
    const signOutUser = () => {
        logout()
            .then(() => { })
            .catch(() => { });
    };
  
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className="min-h-screen flex">
            {/* Mobile menu button */}
            <button
                className="block md:hidden p-4 focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {/* Sidebar */}

            <div className='fixed'>
                <aside className={`w-64 min-h-screen p-6  shadow-lg z-10 md:relative md:translate-x-0 fixed transform transition-transform ${isSidebarOpen ? "translate-x-0 light:bg-gray-300" : "-translate-x-full"} light:bg-gray-300 md:flex md:flex-col`} >

            <aside className={`w-64 bg-[#90e0ef]  min-h-screen p-6  inset-y-0 shadow-lg z-10 md:relative md:translate-x-0 fixed transform transition-transform ${isSidebarOpen ? "translate-x-0 light:bg-gray-300" : "-translate-x-full"} light:bg-gray-300 md:flex md:flex-col`}> 
                
                <div>
                    {/* Back button for mobile & medium devices */}
                    <div className="flex justify-between p-4 bg-blue-500 text-white rounded-2xl m-5 md:hidden">
                        <h1 className="text-lg font-bold">Back</h1>
                        <button
                            className="focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <IoMdArrowBack className="w-6 h-6" />
                        </button>
                    </div>

                    <div>
                        {/* Back button for mobile & medium devices */}
                        <div className="flex justify-between p-4 bg-blue-500 text-white rounded-2xl m-5 md:hidden">
                            <h1 className="text-lg font-bold">Back</h1>
                            <button
                                className="focus:outline-none"
                                onClick={toggleSidebar}
                            >
                                <IoMdArrowBack className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Display user's name */}
                        <div className="mt-7 md:mt-12 lg:mt-12 flex flex-col items-center space-y-2">
                            {user ? (
                                <>
                                    {/* Avatar dropdown */}
                                    <div className="dropdown dropdown-end">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-ghost btn-circle avatar hover:scale-105 transform transition"
                                        >
                                            <div className="w-10 h-10 rounded-full border-2 border-sky-500 p-1">
                                                <Image
                                                    src={user?.photoURL || '/path/to/default-avatar.png'}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                    alt="User avatar"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Display user's name */}
                                    <button className=" font-semibold text-sm hover:text-blue-400 transition">
                                        {user.displayName || 'User'}
                                    </button>

                                    {/* Display user's email */}
                                    <button className=" font-semibold text-sm hover:text-blue-400 transition">
                                        {user.email || 'user@email.com'}
                                    </button>

                                    {/* Log out button */}
                                    <button onClick={signOutUser} className=" font-semibold text-sm hover:text-blue-400 transition">
                                        Log Out
                                    </button>
                                </>
                            ) : null}
                        </div>

                    </div>

                    <nav className="mt-10">
                        <ul className="space-y-2">
                            <Link href={"/"} className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md">
                                <HomeIcon className="h-6 w-6" />
                                <span>Feed</span>
                            </Link>
                            <Link href={"/my-podcast"} className="flex items-center space-x-2 mb-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                                <FaMusic className="h-6 w-6 " />
                                <span>My Podcast</span>
                            </Link>
                            <Link href={"/podcast"} className="flex items-center space-x-2 mb-2 hover:bg-blue-400 p-2 rounded-md">
                                <MicrophoneIcon className="h-6 w-6 " />
                                <span>Podcasts</span>
                            </Link>
                            <Link href={"/receivable-growth"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                                <FaChartBar className="h-6 w-6" />
                                <span>Analytics</span>
                            </Link>
                            <Link href={"/history"} className="flex items-center space-x-2 mb-2 hover:bg-blue-400 p-2 rounded-md">
                                <BookOpenIcon className="h-6 w-6 " />
                                <span>History</span>
                            </Link>
                            <Link href={"/Settings"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                                <CiSettings className="h-6 w-6" />
                                <span>Settings</span>
                            </Link>
                            <Link href={"/generate-thumbnail"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                                <MdGeneratingTokens className="h-6 w-6" />
                                <span>Get Thumbnail</span>
                            </Link>
                            <Link href={"/idea-generate"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                                <FcIdea className="h-6 w-6" />
                                <span>Idea Generate</span>
                            </Link>
                            {/* <Link href={"/"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                </div>
                <nav className="mt-10">
                    <ul className="space-y-2">
                        <Link href={"/my-podcast"} className="flex items-center space-x-2 mb-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <FaMusic className="h-5 w-5 " />
                            <span>My Podcast</span>
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
                        {/* <Link href={"/"} className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <FaHome className="h-6 w-6 " />
                            <span>Home</span>
                        </Link> */}
                            {/* <a href="/" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
                            <FaHome className="mr-3" /> Home
                        </a> */}
                            {/* 
                        <li>
                            <a href="/" className="flex items-center space-x-2 hover:bg-blue-400 hover:text-white p-2 rounded-md">
                            <FaHome className="h-6 w-6 " /> <span className="text-sm font-medium">Home</span>
                            </a>
                        </li> */}
                        </ul>
                    </nav>
                </aside>
            </div>
            {/* Main content */}
            <main className="flex-1 p-10 feed-container mx-auto ml-0 md:ml-64 lg:ml-64 text-white">
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05 }}
                        className='w-full col-span-1'>
                        <AddPodcast />
                    </motion.div>
                    <motion.div
                        className="p-4 bg-[#caf0f8] rounded-lg shadow-lg"
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
                    <motion.div className='m-4 bg-[#caf0f8] '
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <MyPodcasts />
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default CreatorDashboard;
