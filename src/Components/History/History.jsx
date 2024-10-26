'use client';
import Image from 'next/image';
import React from 'react';

// Sample JSON data
const historyData = [
    {
        "date": "July 19, 2021",
        "title": "New trends in Tech",
        "description": "This is a section of some simple filler text, also known as placeholder text.",
        "image": "https://i.ibb.co.com/g7RrMhJ/soundtrap-UKy-J3r-WHNt8-unsplash.jpg",
        "link": "#"
    },
    {
        "date": "April 07, 2021",
        "title": "Working with legacy stacks",
        "description": "This is a section of some simple filler text, also known as placeholder text.",
        "image": "https://i.ibb.co.com/64VjCDq/medium-shot-people-making-podcast.jpg",
        "link": "#"
    },
    {
        "date": "March 15, 2021",
        "title": "10 best smartphones for devs",
        "description": "This is a section of some simple filler text, also known as placeholder text.",
        "image": "https://i.ibb.co.com/NWPKDm7/woman-wearing-headphones-running-podcast.jpg",
        "link": "#"
    },
    {
        "date": "January 27, 2021",
        "title": "8 High performance Notebooks",
        "description": "This is a section of some simple filler text, also known as placeholder text.",
        "image": "https://i.ibb.co.com/VNCk1h0/morning-tech-air-radio-stream-coffee.jpg",
        "link": "#"
    }
];

const History = () => {
    return (
        <div>
            <span className="relative flex justify-center my-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-90 mt-6"
                ></div>
                <span className="relative z-10 px-6 text-2xl text-[#0077b6]">History</span>
            </span>

            {/* Card Section */}
            <div className="mx-auto max-w-screen-xl px-4 my-4 md:px-8">
                {historyData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-90 mb-8">
                        <a href={item.link} className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100  shadow-lg transition duration-200 hover:shadow-2xl md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <Image
                                src={item.image}
                                alt="Image description"
                                loading="lazy"
                                width={600}
                                height={400}
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 group-hover:bg-[#CAF0F8]"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                            <h2 className="text-xl font-bold hover:text-black">
                                <a href={item.link} className="transition duration-100 hover:text-[#00B4D8]">
                                    {item.title}
                                </a>
                            </h2>
                            {/* <p className="text-gray-500 dark:text-gray-400">{item.description}</p> */}
                            <div>
                                <a href={item.link} className="font-semibold text-[#00B4D8] transition duration-100 hover:text-[#0077B6]">
                                    Listen Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default History;
