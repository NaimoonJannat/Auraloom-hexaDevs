"use client"
import React, { useContext } from 'react';
import Link from "next/link";
import { FaMusic } from 'react-icons/fa';
import Image from 'next/image';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip'
import { HomeIcon, MusicNoteIcon, ChartBarIcon, HeartIcon, ClockIcon, BookOpenIcon, MicrophoneIcon } from '@heroicons/react/outline';
import { PlayIcon } from '@heroicons/react/solid';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const Sidebar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const signOutUser = () => {
        logout()
            .then(() => { })
            .catch(() => { });
    };
    return (
        <PrivateRoute>
            <div className="w-64 bg-gray-800 p-5 text-white">
                <h1 className="text-2xl font-bold mb-10">AURALOOM</h1>
                <nav className="space-y-4">
                    <Link href={"/"} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <HomeIcon className="h-6 w-6 text-white" />
                        <span>Feed</span>
                    </Link>
                    <Link href={"/add-to-playlist"} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <MusicNoteIcon className="h-6 w-6 text-white" />
                        <span>Playlists</span>
                    </Link>
                    {/* <Link href={"/"} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <ChartBarIcon className="h-6 w-6 text-white" />
                        <span>Statistics</span>
                    </Link> */}
                </nav>

                <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-2">Your Music</h2>
                    <ul>
                        {/* <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <HeartIcon className="h-5 w-5 text-white" />
                            <span>Favourites</span>
                        </li> */}
                        <Link href={"/listen-later"} className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <ClockIcon className="h-5 w-5 text-white" />
                            <span>Listen Later</span>
                        </Link>
                        <Link href={"/history"} className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <BookOpenIcon className="h-5 w-5 text-white" />
                            <span>History</span>
                        </Link>
                        <Link href={"/podcast"} className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <MicrophoneIcon className="h-5 w-5 text-white" />
                            <span>Podcasts</span>
                        </Link>
                    </ul>
                    <h2 className="text-lg font-semibold mt-10 mb-2">Explore More</h2>
                    <ul>
                        <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <PlayIcon className="h-5 w-5 text-red-400" />
                            <span>Phycology</span>
                        </li>
                        <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <PlayIcon className="h-5 w-5 text-blue-400" />
                            <span>Education</span>
                        </li>
                        <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <PlayIcon className="h-5 w-5 text-purple-400" />
                            <span>Beauty</span>
                        </li>
                        <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                            <PlayIcon className="h-5 w-5 text-green-400" />
                            <span>Art&craft</span>
                        </li>
                    </ul>
                    <Link href={"/create-playlist"} className="mt-4 text-orange-500">Create new playlist +</Link>
                </div>
                <div className="mt-7 md:mt-12 lg:mt-12 flex flex-col items-center space-y-4">
                    {user ? (
                        <>
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
                                <button className="text-white font-semibold text-sm hover:text-blue-400 transition">
                                    {user?.displayName || 'user'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center space-y-2">
                            {/* Sign In */}
                            <Link href="/log-in" className="text-white font-semibold hover:underline">
                                Sign In
                            </Link>

                            {/* Sign Up Button */}
                            <Link href="/sign-up" className="btn bg-white text-gray-900 font-bold hover:bg-orange-500 hover:text-white transition px-6 py-2 rounded-full">
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Be a Creator Button */}
                    <Link
                        href="/creator-dashboard"
                        className="btn mt-5 w-full bg-white hover:bg-sky-400 border-none hover:text-black text-sky-700 py-3 px-7 rounded-md font-bold transition"
                    >
                        Be a Creator
                    </Link>
                </div>

            </div>
        </PrivateRoute>



        // <div className="w-64  flex flex-col items-center p-6 bg-sky-50">
        //     <div className="text-xl flex gap-3 font-bold mb-10"><p >Auraloom</p><FaMusic className="text-2xl text-blue-700" ></FaMusic></div>
        //     {/* <nav>
        //         <div className="flex flex-col w-full border border-blue-700 shadow-lg p-4 rounded-lg ">
        //             <a href={"/"} className=" px-4 rounded-lg mb-4 text-center hover:bg-sky-700 hover:text-white hover:font-bold">
        //                 Music
        //             </a>
        //             <a href="#" className=" px-4 rounded-lg mb-4 text-center hover:bg-sky-700 hover:text-white hover:font-bold">Discover</a>
        //             <a href="#" className=" px-4 rounded-lg mb-4 text-center hover:bg-sky-700 hover:text-white hover:font-bold">Calendar</a>
        //             <a href="#" className=" px-4 rounded-lg mb-4 text-center hover:bg-sky-700 hover:text-white hover:font-bold">Notifications</a>
        //         </div>

        //     </nav> */}


        // </div>
    );
};

export default Sidebar;
