"use client";
import Image from 'next/image';
import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";
import img1 from '../../../public/pexels-brett-sayles-3990842.jpg';
import img2 from '../../../public/kenny-eliason-h0rXrHzhFXU-unsplash.jpg';
import img3 from '../../../public/convertkit-soon-to-be-kit--CbLJAUI_js-unsplash.jpg';
import img4 from '../../../public/a1.jpg';
import img5 from '../../../public/a2.jpg';

const podcastData = [
    {
        "image": 'https://i.ibb.co.com/1bNzGtq/713015ab613810e4f481e39ca4589266.jpg',
        "category": "Life-Style",
        "date": "July 19, 2021",
        "title": "New Trends in Tech",
        "description": "This is a section of some simple filler text, also known as placeholder text.",
        "host": {
            "name": "Mike Lane",
            "profileImage": img1
        },
        "link": "https://example.com/podcasts/new-trends-in-tech"
    },
    {
        "image": 'https://i.ibb.co.com/mq6k7pm/31ece1acb5096c0ae063a37e03ef02d0.jpg',
        "category": "Health",
        "date": "August 15, 2021",
        "title": "Tips for a Balanced Life",
        "description": "Explore effective strategies for maintaining your health and wellness.",
        "host": {
            "name": "Sara Thompson",
            "profileImage": img2
        },
        "link": "https://example.com/podcasts/wellness-tips"
    },
    {
        "image": 'https://i.ibb.co.com/sFXJpS3/451ef469e828a9a7259310b3b75fe5b6.jpg',
        "category": "Finance",
        "date": "September 5, 2021",
        "title": "Investing 101: Building Wealth",
        "description": "A beginner's guide to investing and financial growth.",
        "host": {
            "name": "John Smith",
            "profileImage": img3
        },
        "link": "https://example.com/podcasts/investing-101"
    },
    {
        "image": 'https://i.ibb.co.com/SPKtmyb/3aeceb737714961e6abb19071fcb4d57.jpg',
        "category": "Travel",
        "date": "October 10, 2021",
        "title": "Exploring Hidden Gems",
        "description": "Discover off-the-beaten-path destinations around the world.",
        "host": {
            "name": "Emily Davis",
            "profileImage": img4
        },
        "link": "https://example.com/podcasts/exploring-hidden-gems"
    }
];

const TopContent = () => {



    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>
                <span className="relative z-10 px-6 text-2xl text-[#0077b6] font-montserrat">Top Content</span>
            </span>

            {/* CARD */}
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        {podcastData.map((podcast, index) => (
                            <div key={index} className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CAF0F8] transition-colors duration-200  shadow-lg hover:shadow-2xl max-w-96">
                                <a href={podcast.link} className="group relative block h-48 overflow-hidden bg-gray-100  md:h-64">
                                    <Image
                                        src={podcast.image}
                                        alt={podcast.title}
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        width={400}
                                        height={600}
                                    />
                                    <div className="relative flex justify-end pt-2">
                                        <h2 className="btn bg-gray-200 text-lg scale-75 rounded-full text-black dark:text-gray-800 hover:bg-[#00B4D8] hover:text-white transition-colors">
                                            <IoHeadsetOutline className='text-xl' /> {podcast.category}
                                        </h2>
                                    </div>
                                </a>

                                <div className="flex flex-1 flex-col p-4 sm:p-6">
                                    <span className="text-sm text-gray-400 mb-1">{podcast.date}</span>
                                    <h2 className="mb-2 text-lg font-semibold  ">
                                        <a href={podcast.link} className="transition duration-100  hover:text-[#00B4D8] active:text-[#0077B6] text-xl font-bold">{podcast.title}</a>
                                    </h2>
                                    <hr className="border-gray-300 dark:border-gray-600" />
                                    <p className="mb-8 mt-2 text-gray-500 ">{podcast.description}</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                                                <Image
                                                    src={podcast.host.profileImage}
                                                    alt={podcast.host.name}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div>
                                                <span className="block text-[#0077B6] font-semibold ">Hosted By:</span>
                                                <span className="block text-sm text-gray-400 dark:text-gray-500">{podcast.host.name}</span>
                                            </div>
                                        </div>
                                        <span className="btn rounded-full border text-sm text-gray-500 dark:text-gray-400 hover:bg-[#0077B6] hover:text-white dark:hover:bg-[#00B4D8] transition-colors">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopContent;
