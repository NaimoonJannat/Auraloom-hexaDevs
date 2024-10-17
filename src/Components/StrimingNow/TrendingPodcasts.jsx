"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js
import { IoHeadsetOutline } from "react-icons/io5"; // Assuming you use react-icons

const TrendingPodcasts = () => {
    const podcasts = [
        {
            id: 1,
            podcastName: "Mindful Moments",
            shortDescription: "A journey into mindfulness and mental well-being.",
            category: "Psychology",
            hostName: "Alice Smith",
            hostPicture: 'https://i.ibb.co.com/JRP7tzg/64330e15a86cbad6bcafcdaa1827c7c5.jpg',
            uploadedDate: "August 5, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/zVD30Js/e6265f0cb519dd32b0843cdc9d1b391b.jpg',
        },
        {
            id: 2,
            podcastName: "Artistry Unleashed",
            shortDescription: "Exploring creativity and artistic expression.",
            category: "Art and Craft",
            hostName: "Michael Johnson",
            hostPicture: 'https://i.ibb.co.com/JrptHYn/7745001c25c13a3182ef867a23bc5236.jpg',
            uploadedDate: "August 12, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/SPKtmyb/3aeceb737714961e6abb19071fcb4d57.jpg',
        },
        {
            id: 3,
            podcastName: "Educator's Corner",
            shortDescription: "Innovative teaching methods and educational insights.",
            category: "Education",
            hostName: "Sarah Lee",
            hostPicture: 'https://i.ibb.co/XXdPFNT/pexels-photo-2379005.jpg',
            uploadedDate: "September 1, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/pzhNXLk/643c1b814137d069ad577ea814894264.jpg',
        },
        {
            id: 4,
            podcastName: "Beauty Buzz",
            shortDescription: "All things beauty, from skincare to makeup trends.",
            category: "Beauty",
            hostName: "Emma Watson",
            hostPicture: 'https://i.ibb.co.com/xYxzPNp/11a1af9c7c233338f401bb2d3d40f842.jpg',
            uploadedDate: "September 10, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/xYxzPNp/11a1af9c7c233338f401bb2d3d40f842.jpg',
        },
        {
            id: 5,
            podcastName: "Chill Vibes Only",
            shortDescription: "Relaxing discussions to unwind and enjoy.",
            category: "Fun and Chill",
            hostName: "Chris Brown",
            hostPicture: 'https://i.ibb.co.com/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            uploadedDate: "September 15, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/dsZRYK5/7fd5ba33a4a9c6c6f530a825df3f7580.jpg',
        },
        {
            id: 6,
            podcastName: "Psychology Unplug",
            shortDescription: "Deep dives into the human mind and behavior.",
            category: "Psychology",
            hostName: "Rachel Green",
            hostPicture: 'https://i.ibb.co.com/2Sk8Gn9/6f19c2cb23331dcbdfdf97618c60b401.jpg',
            uploadedDate: "September 20, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/1bNzGtq/713015ab613810e4f481e39ca4589266.jpg',
        },
        {
            id: 7,
            podcastName: "Crafty Conversation",
            shortDescription: "A look at the art of crafting and DIY projects.",
            category: "Art and Craft",
            hostName: "Liam Smith",
            hostPicture: 'https://i.ibb.co.com/86WsVqG/pexels-photo-3775540.jpg',
            uploadedDate: "October 2, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/VNPkm25/ff8366de4c8ad75f7e94c1e9c73c7e19.jpg',
        },
        {
            id: 8,
            podcastName: "Learn & Grow",
            shortDescription: "Empowering learners with valuable insights.",
            category: "Education",
            hostName: "Olivia Taylor",
            hostPicture: 'https://i.ibb.co.com/s98GyMd/pexels-photo-3768894.webp',
            uploadedDate: "October 8, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/zfpxS82/11c08ef0bcc1c7c5f045e07928d1f7ad.jpg',
        },
        {
            id: 9,
            podcastName: "Glow Getter",
            shortDescription: "Discover beauty tips and self-care routines.",
            category: "Beauty",
            hostName: "Sophia Brown",
            hostPicture: 'https://i.ibb.co.com/Vv4SBWQ/32d5335cfcb35d7d44c79e8c43d71819.jpg',
            uploadedDate: "October 15, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/ZShStpd/403b6067f5b71317c92429ca0d800e17.jpg',
        },
        {
            id: 10,
            podcastName: "Fun Time Talks",
            shortDescription: "Light-hearted chats about life and everything fun.",
            category: "Fun and Chill",
            hostName: "Daniel Kim",
            hostPicture: 'https://i.ibb.co.com/8brcxFd/pexels-photo-927451.webp',
            uploadedDate: "October 18, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/mq6k7pm/31ece1acb5096c0ae063a37e03ef02d0.jpg',
        },
        {
            id: 11,
            podcastName: "Mental Mastery",
            shortDescription: "Techniques to enhance your mental strength.",
            category: "Psychology",
            hostName: "Emma Stone",
            hostPicture: 'https://i.ibb.co/1rQ7SkN/pexels-photo-1674752.webp',
            uploadedDate: "October 20, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/WgyfMXC/95a7765e454f508039cf2b9b6ed90fc5.jpg',
        },
        {
            id: 12,
            podcastName: "Creative Canvas",
            shortDescription: "Inspiration for artists and craft enthusiasts.",
            category: "Art and Craft",
            hostName: "Lucas Miller",
            hostPicture: 'https://i.ibb.co.com/yQLYYBG/97ac0e5c87760aaf150d6d4c6852b35a.jpg',
            uploadedDate: "October 22, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/1ZQV6Bt/11452e9b2d1bd1108c3d825680a4058f.jpg',
        },
        {
            id: 13,
            podcastName: "Teaching Tomorrow",
            shortDescription: "Innovative strategies for future educators.",
            category: "Education",
            hostName: "Ella Johnson",
            hostPicture: 'https://i.ibb.co.com/wdsQtDF/pexels-photo-1181487.webp',
            uploadedDate: "October 25, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/sFXJpS3/451ef469e828a9a7259310b3b75fe5b6.jpg',
        },
        {
            id: 14,
            podcastName: "Beauty Essentials",
            shortDescription: "Must-know beauty hacks for everyday life.",
            category: "Beauty",
            hostName: "Mia Brown",
            hostPicture: 'https://i.ibb.co.com/xYxzPNp/11a1af9c7c233338f401bb2d3d40f842.jpg',
            uploadedDate: "October 28, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/7gHy8jK/6688b6932af8170b0029c5813829be17.jpg',
        },
        {
            id: 15,
            podcastName: "Chill with Friends",
            shortDescription: "Casual chats that bring smiles and laughter.",
            category: "Fun and Chill",
            hostName: "Noah White",
            hostPicture: 'https://i.ibb.co.com/s9v7Q5n/0a5d05b3dca625dd69a66fc721625674.jpg',
            uploadedDate: "October 30, 2023",
            podcastThumbnail: 'https://i.ibb.co.com/Rp6wWwV/0f24ffe2cee9106e1b92c82fdf5006e2.jpg',
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
                <span className="relative flex justify-center mt-20 mb-5 font-bold">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                    ></div>
                    <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6] font-montserrat">Trending Podcasts</span>
                </span>
                <p className="mt-4 text-center mb-8 dark:text-sky-950">
                    Discover top podcasts from various categories, hosted by industry experts.
                </p>
            </div>
            <div className="overflow-hidden relative">
                <div className="flex  gap-5" ref={containerRef} style={{ minHeight: '100%', whiteSpace: 'nowrap', overflowX: 'hidden' }}>
                    {podcasts.map((podcast) => (
                        <motion.div
                            key={podcast.id}
                            className="inline-block border-2 rounded-lg w-full max-w-sm mx-auto my-4 "

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
                                            width={300}
                                            height={300}
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

export default TrendingPodcasts;
