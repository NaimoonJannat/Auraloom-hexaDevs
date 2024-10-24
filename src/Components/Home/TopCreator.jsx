import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/avatar (1).jpg'
import img2 from '../../../public/avatar (2).jpg'
import img3 from '../../../public/avatar (3).jpg'
import img4 from '../../../public/avatar.jpg'

const TopCreator = () => {

    const creators = [
        {
            "id": 1,
            "name": "Austin Wade",
            "profileImage": img1
        },
        {
            "id": 2,
            "name": "Alexandru Zdrobau",
            "profileImage": img2
        },
        {
            "id": 3,
            "name": "Albert Dera",
            "profileImage": img3
        },
        {
            "id": 4,
            "name": "Stefan Stefancik",
            "profileImage": img4
        }
    ]

    return (
        <div>
            <div className="py-3 md:py-4">
                <div className="mx-auto max-w-screen px-4 md:px-8">

                    <div className="mb-10 md:mb-16">
                        <span className="relative flex justify-center mt-20 mb-10 font-bold">
                            <div
                                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                            ></div>

                            <span className="relative z-10 px-6 text-2xl text-[#0077b6] font-montserrat">Top Creators</span>
                        </span>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>

                    {/* CARD */}
                    <div className="mx-auto max-w-screen px-4 md:px-8">
                        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                            {creators.map((creator) => (
                                <div key={creator.id}>
                                    <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 p-4 shadow-lg transition duration-200 hover:shadow-2xl hover:bg-[#CAF0F8] dark:hover:bg-[#0077B6] border-2">
                                        <Image
                                            height={600}
                                            width={400}
                                            src={creator.profileImage}
                                            loading="lazy"
                                            alt={`Photo by ${creator.name}`}
                                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        />
                                        <div className="relative flex w-full flex-col rounded-lg bg-gray-100  p-4 text-center">
                                            <span className="text-lg font-bold text-gray-800 lg:text-xl">
                                                {creator.name}
                                            </span>
                                            <div className="flex justify-center pt-3">
                                                <div className="flex gap-4">
                                                    <a href="#" target="_blank" className="text-gray-400 dark:text-gray-500 transition duration-100 hover:text-[#0077B6] dark:hover:text-[#00B4D8] active:text-gray-600">
                                                        <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                    <a href="#" target="_blank" className="text-gray-400 dark:text-gray-500 transition duration-100 hover:text-[#0077B6] dark:hover:text-[#00B4D8] active:text-gray-600">
                                                        <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopCreator;
