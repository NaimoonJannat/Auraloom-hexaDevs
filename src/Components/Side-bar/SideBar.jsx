"use client"
import React, { useContext } from 'react';
import Link from "next/link";
import { FaMusic } from 'react-icons/fa';
import Image from 'next/image';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip'
import { HomeIcon, MusicNoteIcon, ChartBarIcon, HeartIcon, ClockIcon, BookOpenIcon, MicrophoneIcon } from '@heroicons/react/outline';


const Sidebar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const signOutUser = () => {
        logout()
            .then(() => { })
            .catch(() => { });
    };
    return (
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
                <Link href={"/"} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                    <ChartBarIcon className="h-6 w-6 text-white" />
                    <span>Statistics</span>
                </Link>
            </nav>

            <div className="mt-10">
                <h2 className="text-lg font-semibold mb-2">Your Music</h2>
                <ul>
                    <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                        <HeartIcon className="h-5 w-5 text-white" />
                        <span>Favourites</span>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                        <ClockIcon className="h-5 w-5 text-white" />
                        <span>Listen Later</span>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                        <BookOpenIcon className="h-5 w-5 text-white" />
                        <span>History</span>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 hover:bg-gray-700 p-2 rounded-md">
                        <MicrophoneIcon className="h-5 w-5 text-white" />
                        <span>Podcasts</span>
                    </li>
                </ul>
                <h2 className="text-lg font-semibold mt-10 mb-2">Your Playlists</h2>
                <ul>
                    <li className="mb-2 text-red-400">Phycology</li>
                    <li className="mb-2 text-blue-400">Education</li>
                    <li className="mb-2 text-green-400">Art&craft</li>
                    <li className="mb-2 text-purple-400">Beauty</li>
                </ul>
                <button className="mt-4 text-orange-500">Create new playlist +</button>
            </div>
        </div>
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

        //     <div className="mt-auto flex flex-col items-center">
        //         {user ? (
        //             <>
        //                 <div>
        //                     <div className="dropdown dropdown-end">
        //                         <div
        //                             tabIndex={0}
        //                             role="button"
        //                             className="btn btn-ghost btn-circle avatar"
        //                         >
        //                             <div className="w-10 rounded-full">
        //                                 <Image
        //                                     src={user?.photoURL}
        //                                     width={40}
        //                                     height={40}
        //                                     className="w-full"
        //                                     alt="User avatar"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div anchorSelect="#clickable" clickable>
        //                     <button>{user?.displayName || 'user'}</button>
        //                 </div>
        //             </>
        //         ) : (
        //             <>
        //                 <li>
        //                     <Link href="/log-in">Sign In</Link>
        //                 </li>
        //                 <Link href="/sign-up" className="btn bg-white font-bold">
        //                     Sign Up
        //                 </Link>
        //             </>
        //         )}
        //         <Link href={'/creator-dashboard'} className='btn mt-5 w-full hover:bg-sky-700 bg-sky-200 text-black hover:text-white py-3 px-7 rounded-md font-bold'>Be a Creator</Link>
        //     </div>
        // </div>
    );
};

export default Sidebar;
