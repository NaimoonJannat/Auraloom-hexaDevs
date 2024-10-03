"use client"
import React, { useState } from 'react';
import AddPodcast from '../add-podcast/AddPodcast';
import MyPodcasts from '../MyPodcast/MyPodcast';
import Link from 'next/link';

const CreatorDashboard = () => {
    const [podcasts, setPodcasts] = useState([
        { id: 1, title: 'Tech Talks', creator: 'Emer', description: 'Tech news and updates', likes: 120 },
        { id: 2, title: 'Storytime', creator: 'Emer', description: 'Fictional stories', likes: 85 },
        { id: 3, title: 'Music Vibes', creator: 'Emer', description: 'Best chill music playlists', likes: 98 },
    ]);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* <h1 className="text-3xl font-bold text-gray-800 mb-6">Creator Dashboard</h1> */}
            {/* Hero */}
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
            {/* Upload New Podcast */}
            {/* <section className="mb-10">
                <AddPodcast></AddPodcast>
            </section> */}

            {/* My Podcasts */}
            <section>
                <MyPodcasts podcasts={podcasts} />
            </section>
        </div>
    );
};

export default CreatorDashboard;
