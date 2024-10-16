"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js
import { IoHeadsetOutline } from "react-icons/io5"; // Assuming you use react-icons

const TrendingTopicc = () => {
    const podcasts = [
        {
            id: 1,
            podcastName: "Mindful Moments",
            shortDescription: "A journey into mindfulness and mental well-being.",
            category: "Psychology",
            hostName: "Alice Smith",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "August 5, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 2,
            podcastName: "Artistry Unleashed",
            shortDescription: "Exploring creativity and artistic expression.",
            category: "Art and Craft",
            hostName: "Michael Johnson",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "August 12, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 3,
            podcastName: "Educator's Corner",
            shortDescription: "Innovative teaching methods and educational insights.",
            category: "Education",
            hostName: "Sarah Lee",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "September 1, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 4,
            podcastName: "Beauty Buzz",
            shortDescription: "All things beauty, from skincare to makeup trends.",
            category: "Beauty",
            hostName: "Emma Watson",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "September 10, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 5,
            podcastName: "Chill Vibes Only",
            shortDescription: "Relaxing discussions to unwind and enjoy.",
            category: "Fun and Chill",
            hostName: "Chris Brown",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "September 15, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 6,
            podcastName: "Psychology Unplugged",
            shortDescription: "Deep dives into the human mind and behavior.",
            category: "Psychology",
            hostName: "Rachel Green",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "September 20, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 7,
            podcastName: "Crafty Conversations",
            shortDescription: "A look at the art of crafting and DIY projects.",
            category: "Art and Craft",
            hostName: "Liam Smith",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 2, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 8,
            podcastName: "Learn & Grow",
            shortDescription: "Empowering learners with valuable insights.",
            category: "Education",
            hostName: "Olivia Taylor",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 8, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 9,
            podcastName: "Glow Getter",
            shortDescription: "Discover beauty tips and self-care routines.",
            category: "Beauty",
            hostName: "Sophia Brown",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 15, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 10,
            podcastName: "Fun Time Talks",
            shortDescription: "Light-hearted chats about life and everything fun.",
            category: "Fun and Chill",
            hostName: "Daniel Kim",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 18, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 11,
            podcastName: "Mental Mastery",
            shortDescription: "Techniques to enhance your mental strength.",
            category: "Psychology",
            hostName: "Emma Stone",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 20, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 12,
            podcastName: "Creative Canvas",
            shortDescription: "Inspiration for artists and craft enthusiasts.",
            category: "Art and Craft",
            hostName: "Lucas Miller",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 22, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 13,
            podcastName: "Teaching Tomorrow",
            shortDescription: "Innovative strategies for future educators.",
            category: "Education",
            hostName: "Ella Johnson",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 25, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 14,
            podcastName: "Beauty Essentials",
            shortDescription: "Must-know beauty hacks for everyday life.",
            category: "Beauty",
            hostName: "Mia Brown",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 28, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
        {
            id: 15,
            podcastName: "Chill with Friends",
            shortDescription: "Casual chats that bring smiles and laughter.",
            category: "Fun and Chill",
            hostName: "Noah White",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 30, 2023",
            podcastThumbnail: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
        },
    ];


    const containerRef = useRef(null);

    const scrollCards = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 2;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollCards, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='my-10 md:my-14 lg:my-20'>
            <div className="">
                <h2 className="text-2xl text-center font-semibold sm:text-4xl text-[#0077B5]">Trending Podcasts</h2>
                <p className="mt-4 text-center mb-8 dark:text-sky-950">
                    Discover top podcasts from various categories, hosted by industry experts.
                </p>
            </div>
            <div className="overflow-hidden relative">
                <div className="flex gap-5" ref={containerRef} style={{ minHeight: '100%', whiteSpace: 'nowrap', overflowX: 'hidden' }}>
                    {podcasts.map((podcast) => (
                        <motion.div
                            key={podcast.id}
                            className="inline-block w-full max-w-sm mx-auto my-4 "

                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.03 }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className='border rounded-xl hover:border-[#0077b6] gap-6'>
                                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 p-4">
                                    <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                        <Image
                                            src={podcast.podcastThumbnail}
                                            alt={podcast.podcastName}
                                            className="absolute  h-full w-full object-cover object-center "
                                            width={300}  // specify the width
                                            height={300} // specify the height
                                        />
                                    </a>

                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm text-gray-400">{podcast.uploadedDate}</span>

                                        <h2 className="text-lg font-bold">
                                            <a href="#" className=" hover:text-[#00b4d8] active:text-[#0077b6]">
                                                {podcast.podcastName}
                                            </a>
                                        </h2>
                                        <hr />
                                        <p className="text-gray-500 overflow-hidden w-32">{podcast.shortDescription}</p>

                                        <div>
                                            <a href="#" className="font-semibold text-[#00b4d8] hover:text-[#0077b6] active:text-indigo-700">
                                                Listen Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center py-2'>
                                    <div className='flex gap-4 px-4 items-center'>
                                        <IoHeadsetOutline className='text-xl' />
                                        <button className='btn btn-xs border border-black rounded-md'>{podcast.category}</button>
                                    </div>
                                    <div className='flex items-center px-4'>
                                        <h2>Hosted by:</h2>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                                            <Image
                                                src={podcast.hostPicture}
                                                alt={podcast.hostName}
                                                className="object-cover w-8 h-8 mx-4 rounded-full"
                                                width={50} // specify width
                                                height={50} // specify height
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingTopicc;
