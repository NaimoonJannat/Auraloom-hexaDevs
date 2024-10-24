"use client"
import React, { useContext } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { HomeIcon, MusicNoteIcon, ClockIcon, BookOpenIcon, MicrophoneIcon } from '@heroicons/react/outline';
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
            <div className="w-64 fixed h-screen bg-gray-800 p-5 text-white">
                <h1 className="text-2xl font-bold mb-10">AURALOOM</h1>
                <nav className="space-y-1">
                    <Link href={"/"} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <HomeIcon className="h-6 w-6 text-white" />
                        <span>Feed</span>
                    </Link>
                    <Link href={"/add-to-playlist"} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <MusicNoteIcon className="h-6 w-6 text-white" />
                        <span>Playlists</span>
                    </Link>
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

                    <Link href={"/create-playlist"} className=" text-orange-500 flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">Create new playlist +</Link>
                </nav>

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
                            <Link href="/sign-up" className="btn  text-gray-900 font-bold hover:bg-orange-500 hover:text-white transition px-6 py-2 rounded-full">
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Be a Creator Button */}
                    <Link
                        href="/creator-dashboard"
                        className="btn mt-5 w-full  hover:bg-sky-400 border-none hover:text-black text-sky-700 py-3 px-7 rounded-md font-bold transition"
                    >
                        Be a Creator
                    </Link>
                </div>

            </div>
        </PrivateRoute>

    );
};

export default Sidebar;
