"use client"
import React, { useContext, useState } from 'react';
import ReceivableGrowth from './ReceivableGrowth'; // Import the ReceivableGrowth component
import Image from 'next/image';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import MyPodcasts from '../MyPodcast/MyPodcast';
import Link from 'next/link';

const CreatorDashboardT = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const signOutUser = () => {
        logout()
            .then(() => { })
            .catch(() => { });
    };

    const [podcasts, setPodcasts] = useState([
        { id: 1, title: 'Tech Talks', creator: 'Emer', description: 'Tech news and updates', likes: 120 },
        { id: 2, title: 'Storytime', creator: 'Emer', description: 'Fictional stories', likes: 85 },
        { id: 3, title: 'Music Vibes', creator: 'Emer', description: 'Best chill music playlists', likes: 98 },
    ]);
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white p-6">
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
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <span className="text-sm font-medium">Valuation</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <span className="text-sm font-medium">Invoices</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <span className="text-sm font-medium">Messages</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <span className="text-sm font-medium">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <span className="text-sm font-medium">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <span className="text-sm font-medium">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-10">
                <div
                    className="hero min-h-72"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/mTGcYZK/57a26592612e2081a0db8b71f07af624.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello Creator</h1>
                            <p className="mb-5">
                                If You Want To Add A New Podcast PLease Click Here....
                            </p>
                            <Link href={'/add-podcast'} className="btn bg-blue-500 text-white border-none">Add A New Podcast</Link>
                        </div>
                    </div>
                </div>
                {/* Overview */}
                {/* <h1 className="text-2xl font-semibold mb-8">Overview</h1> */}
                <div className="grid grid-cols-4 mt-4 gap-4">
                    {/* Valuation is up */}
                    <div className="col-span-2 p-4 bg-green-100 rounded-lg">
                        <h2 className="text-lg font-semibold">Generate Thumbnail</h2>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    {/* Valuation past 89 days */}
                    <div className="col-span-2 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold">Generate Idea</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                {/* Receivable Growth */}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Receivable Growth</h2>
                    <ReceivableGrowth /> {/* Render the ReceivableGrowth component */}
                </div>

                <section>
                    <MyPodcasts podcasts={podcasts} />
                </section>
            </main>
        </div>
    );
};

export default CreatorDashboardT;
